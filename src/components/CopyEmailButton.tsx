"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
};

export function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black/80 transition-colors hover:border-black/30 hover:text-black"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
