"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { decodeJwtToken, getJwtTimingClaims } from "@/lib/jwtUtils";

const JwtDecoderTool = () => {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);

  const decodedToken = useMemo(() => {
    if (!token.trim()) {
      return {
        header: "",
        payload: "",
        signature: "",
        error: "",
      };
    }
    try {
      return {
        ...decodeJwtToken(token),
        error: "",
      };
    } catch {
      return {
        header: "",
        payload: "",
        signature: "",
        error: "Invalid JWT",
      };
    }
  }, [token]);

  const timingClaims = useMemo(
    () => getJwtTimingClaims(decodedToken.payload),
    [decodedToken.payload]
  );

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
        placeholder="Paste your JWT token here..."
      />

      <p className="text-sm text-muted-foreground">
        Tokens are decoded locally in your browser. This tool does not verify
        the signature.
      </p>

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

      <div className="rounded-3xl bg-muted p-4 shadow-sm">
        <p className="text-sm font-medium text-foreground">Signature</p>
        <p className="mt-2 break-all text-sm text-muted-foreground">
          {decodedToken.signature || "Signature will appear here..."}
        </p>
      </div>

      {timingClaims.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {timingClaims.map((item) => (
            <div
              key={item.claim}
              className="rounded-3xl bg-muted p-4 shadow-sm"
            >
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {decodedToken.error && <p className="text-red-500">{decodedToken.error}</p>}

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
