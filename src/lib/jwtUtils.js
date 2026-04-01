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

const formatJsonPart = (part) => JSON.stringify(JSON.parse(part), null, 2);

const formatUnixClaim = (value) => {
  if (typeof value !== "number" || Number.isNaN(value)) return null;

  return new Date(value * 1000).toLocaleString();
};

export const decodeJwtToken = (token) => {
  const parts = token.trim().split(".");

  if (parts.length < 2) {
    throw new Error("Invalid JWT");
  }

  return {
    header: formatJsonPart(decodeBase64Url(parts[0])),
    payload: formatJsonPart(decodeBase64Url(parts[1])),
    signature: parts[2] || "",
  };
};

export const getJwtTimingClaims = (payloadText) => {
  if (!payloadText) return [];

  try {
    const parsedPayload = JSON.parse(payloadText);
    const claimLabels = {
      exp: "Expires At",
      iat: "Issued At",
      nbf: "Not Before",
    };

    return Object.entries(claimLabels)
      .map(([claim, label]) => ({
        claim,
        label,
        value: formatUnixClaim(parsedPayload[claim]),
      }))
      .filter((item) => item.value);
  } catch {
    return [];
  }
};
