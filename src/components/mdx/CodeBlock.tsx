"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  // Extraer el lenguaje de la clase (por ejemplo: "language-javascript")
  const language = className?.replace("language-", "") || "plaintext";

  return (
    <div className="relative">
      {/* etiqueta arriba derecha */}
      <span className="absolute right-0 top-0 text-xs bg-black/40 text-white rounded px-2 py-0.5 font-mono">
        {language}
      </span>

      <code ref={codeRef} className={className}>
        {children}
      </code>
    </div>
  );
};

interface PreBlockProps {
  children?: React.ReactNode;
}

export const PreBlock = ({ children }: PreBlockProps) => {
  return <pre className="p-0">{children}</pre>;
};
