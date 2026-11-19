// Signed with HS256 and the secret "example-secret". Expires in 2100.
export const EXAMPLE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6ImVkaXRvciIsImlzcyI6Imh0dHBzOi8vYXV0aC5leGFtcGxlLmNvbSIsImF1ZCI6InRvb2x6bWludC1kZW1vIiwiaWF0IjoxNzY3MjI1NjAwLCJleHAiOjQxMDI0NDQ4MDB9.9XZUmizfBOaFOOP8A3tLoF9QR3loj4xLbvTpA315MWI";

// Registered claims from RFC 7519, section 4.1.
const REGISTERED_CLAIMS = {
  iss: "Issuer: who created and signed the token",
  sub: "Subject: who the token is about, usually a user ID",
  aud: "Audience: who the token is intended for",
  exp: "Expiration time: the token must not be accepted after this",
  nbf: "Not before: the token must not be accepted before this",
  iat: "Issued at: when the token was created",
  jti: "JWT ID: a unique identifier for this token",
};

const TIME_CLAIMS = ["exp", "nbf", "iat"];

const decodeBase64Url = (value) => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "=",
  );
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
};

const decodeJsonPart = (part, name) => {
  try {
    return JSON.stringify(JSON.parse(decodeBase64Url(part)), null, 2);
  } catch {
    throw new Error(
      `The ${name} could not be decoded. Check that the token was copied completely.`,
    );
  }
};

const formatUnixClaim = (value) => {
  if (typeof value !== "number" || Number.isNaN(value)) return null;

  return new Date(value * 1000).toLocaleString();
};

// Accepts a raw token or a full "Bearer <token>" Authorization header value.
export const normalizeToken = (token) =>
  token.trim().replace(/^bearer\s+/i, "").replace(/\s+/g, "");

export const decodeJwtToken = (token) => {
  const parts = normalizeToken(token).split(".");

  if (parts.length === 5) {
    throw new Error(
      "This looks like an encrypted JWT (JWE) with five parts. Its contents cannot be read without the decryption key.",
    );
  }

  if (parts.length !== 3) {
    throw new Error(
      `A JWT has three parts separated by dots (header.payload.signature). This value has ${parts.length}.`,
    );
  }

  return {
    header: decodeJsonPart(parts[0], "header"),
    payload: decodeJsonPart(parts[1], "payload"),
    signature: parts[2],
  };
};

const UNITS = [
  ["year", 365 * 24 * 3600],
  ["day", 24 * 3600],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

export const formatDuration = (seconds) => {
  const abs = Math.abs(seconds);
  const [unit, size] = UNITS.find(([, s]) => abs >= s) || UNITS.at(-1);
  const count = Math.floor(abs / size);

  return `${count} ${unit}${count === 1 ? "" : "s"}`;
};

// Returns { state, message } describing exp and nbf relative to `now` (in seconds).
export const getTokenStatus = (payloadText, now = Date.now() / 1000) => {
  let payload;
  try {
    payload = JSON.parse(payloadText);
  } catch {
    return null;
  }

  const { exp, nbf } = payload;

  if (typeof nbf === "number" && now < nbf) {
    return {
      state: "pending",
      message: `Not valid yet. It becomes valid in ${formatDuration(nbf - now)}.`,
    };
  }

  if (typeof exp !== "number") {
    return {
      state: "no-expiry",
      message: "This token has no expiration time (exp claim).",
    };
  }

  return exp <= now
    ? { state: "expired", message: `Expired ${formatDuration(now - exp)} ago.` }
    : { state: "active", message: `Not expired. It expires in ${formatDuration(exp - now)}.` };
};

// Lists the registered claims present in the payload, with a readable value.
export const getRegisteredClaims = (payloadText) => {
  let payload;
  try {
    payload = JSON.parse(payloadText);
  } catch {
    return [];
  }

  return Object.entries(REGISTERED_CLAIMS)
    .filter(([claim]) => payload[claim] !== undefined)
    .map(([claim, description]) => {
      const raw = payload[claim];
      const value =
        TIME_CLAIMS.includes(claim) && typeof raw === "number"
          ? `${raw} (${formatUnixClaim(raw)})`
          : Array.isArray(raw)
            ? raw.join(", ")
            : String(raw);

      return { claim, description, value };
    });
};

export const getHeaderWarning = (headerText) => {
  try {
    const { alg } = JSON.parse(headerText);
    if (typeof alg === "string" && alg.toLowerCase() === "none") {
      return 'This token uses "alg": "none", which means it is not signed. Servers should reject unsigned tokens.';
    }
  } catch {}
  return null;
};
