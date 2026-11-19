"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import {
  EXAMPLE_JWT,
  decodeJwtToken,
  getHeaderWarning,
  getRegisteredClaims,
  getTokenStatus,
} from "@/lib/jwtUtils";

const EMPTY_TOKEN = { header: "", payload: "", signature: "", error: "" };

const STATUS_STYLES = {
  active: "bg-primary/10 text-primary",
  expired: "bg-red-500/10 text-red-500",
  pending: "bg-amber-500/10 text-amber-600",
  "no-expiry": "bg-muted text-muted-foreground",
};

const JwtDecoderTool = () => {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);

  const decodedToken = useMemo(() => {
    if (!token.trim()) return EMPTY_TOKEN;

    try {
      return { ...decodeJwtToken(token), error: "" };
    } catch (error) {
      return { ...EMPTY_TOKEN, error: error.message };
    }
  }, [token]);

  const status = useMemo(
    () => (decodedToken.payload ? getTokenStatus(decodedToken.payload) : null),
    [decodedToken.payload],
  );

  const claims = useMemo(
    () => getRegisteredClaims(decodedToken.payload),
    [decodedToken.payload],
  );

  const headerWarning = getHeaderWarning(decodedToken.header);

  const handleClear = () => {
    setToken("");
  };

  const handleCopy = async () => {
    if (!decodedToken.header && !decodedToken.payload) return;

    const formattedDecodedToken = JSON.stringify(
      {
        header: decodedToken.header ? JSON.parse(decodedToken.header) : null,
        payload: decodedToken.payload ? JSON.parse(decodedToken.payload) : null,
        signature: decodedToken.signature || null,
      },
      null,
      2,
    );

    await navigator.clipboard.writeText(formattedDecodedToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <ToolTextarea
        label="JWT Token"
        value={token}
        onChange={setToken}
        placeholder="Paste a JWT, or a full 'Bearer eyJ...' Authorization header..."
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Tokens are decoded locally in your browser and never uploaded. This
          tool does not verify the signature.
        </p>
        {!token && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setToken(EXAMPLE_JWT)}
            className="cursor-pointer rounded-full border-0 bg-muted shadow-sm transition-all hover:bg-muted/80 hover:shadow-md"
          >
            Try an example
          </Button>
        )}
      </div>

      {decodedToken.error && (
        <p className="rounded-3xl bg-red-500/10 p-4 text-sm text-red-500">
          {decodedToken.error}
        </p>
      )}

      {status && (
        <p
          className={`rounded-3xl p-4 text-sm font-medium ${STATUS_STYLES[status.state]}`}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}

      {headerWarning && (
        <p className="rounded-3xl bg-amber-500/10 p-4 text-sm text-amber-600">
          {headerWarning}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label="Header"
          value={decodedToken.header}
          readOnly
          placeholder="Decoded header will appear here..."
        />

        <ToolTextarea
          label="Payload"
          value={decodedToken.payload}
          readOnly
          placeholder="Decoded payload will appear here..."
        />
      </div>

      {claims.length > 0 && (
        <div className="overflow-x-auto rounded-3xl bg-muted p-4 shadow-sm">
          <p className="mb-3 text-sm font-medium text-foreground">
            Standard claims in this token
          </p>
          <table className="w-full text-left text-sm">
            <tbody>
              {claims.map((item) => (
                <tr key={item.claim} className="border-t border-border/60 align-top">
                  <td className="py-2 pr-4 font-mono font-medium text-foreground">
                    {item.claim}
                  </td>
                  <td className="py-2 pr-4 wrap-anywhere text-foreground">{item.value}</td>
                  <td className="hidden py-2 text-muted-foreground sm:table-cell">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="rounded-3xl bg-muted p-4 shadow-sm">
        <p className="text-sm font-medium text-foreground">Signature</p>
        <p className="mt-2 break-all text-sm text-muted-foreground">
          {decodedToken.signature || "Signature will appear here..."}
        </p>
      </div>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!decodedToken.header && !decodedToken.payload}
        copied={copied}
      />
    </div>
  );
};

export default JwtDecoderTool;
