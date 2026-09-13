"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
export function CodeBlock({ code, label }: { code: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="community-code">
      <div className="code-heading">
        <span>{label}</span>
        <button type="button" onClick={copy} aria-label={`Copy ${label}`}>
          {status === "copied" ? <Check size={14} /> : <Copy size={14} />}
          {status === "copied" ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
      <span className="copy-feedback" role="status">
        {status === "error"
          ? "Copy unavailable. Select and copy the code above."
          : status === "copied"
            ? "Copied to clipboard."
            : ""}
      </span>
    </div>
  );
}
