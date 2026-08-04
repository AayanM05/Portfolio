import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

export default function CodeBlock({ filename, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = (code || "").trim().split("\n");

  const escapeHtml = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const highlightLine = (line) => {
    if (!line) return "";
    const trimmed = line.trim();
    if (trimmed.startsWith("#") || trimmed.startsWith("//") || trimmed.startsWith("*")) {
      return `<span class="text-ink-soft/60 dark:text-void-soft/60 italic">${escapeHtml(line)}</span>`;
    }

    let html = escapeHtml(line);

    // Strings
    html = html.replace(/(["'])(?:(?=(\\?))\2[\s\S])*?\1/g, '<span class="text-emerald-600 dark:text-emerald-400">$1$2$&amp;</span>');

    // Keywords
    const keywords = [
      "def", "class", "return", "import", "from", "if", "else", "elif", "not", "and", "or",
      "for", "in", "raise", "try", "except", "public", "private", "protected", "void", "new",
      "package", "final", "static", "lambda", "with", "as"
    ];
    keywords.forEach((kw) => {
      const regex = new RegExp(`\\b(${kw})\\b`, "g");
      html = html.replace(regex, `<span class="text-accent dark:text-accent-dark font-bold">$1</span>`);
    });

    // Decorators / Annotations
    html = html.replace(/(@\w+)/g, '<span class="text-purple-600 dark:text-purple-400 font-medium">$1</span>');

    // Numbers
    html = html.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="text-amber-600 dark:text-amber-400">$1</span>');

    return html;
  };

  return (
    <div className="border border-line/80 dark:border-void-line/80 bg-paper dark:bg-void text-ink dark:text-void-ink overflow-hidden font-mono text-[11.5px] md:text-[12.5px] leading-relaxed my-4 shadow-sm">
      {/* Header Matching Site Design System */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-ink/[0.03] dark:bg-void-ink/[0.04] border-b border-line/60 dark:border-void-line/60 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-line dark:bg-void-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line dark:bg-void-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line dark:bg-void-line" />
        </div>

        {filename && (
          <div className="flex items-center gap-1.5 tag-mono text-[11px] text-ink-soft dark:text-void-soft font-medium">
            <Terminal size={13} className="text-accent dark:text-accent-dark" />
            <span>{filename}</span>
          </div>
        )}

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-0.5 tag-mono text-[10.5px] text-ink-soft dark:text-void-soft hover:text-ink dark:hover:text-void-ink border border-line/60 dark:border-void-line/60 bg-paper dark:bg-void transition-colors duration-150"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check size={12} className="text-accent dark:text-accent-dark" />
              <span className="text-accent dark:text-accent-dark font-bold">COPIED</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Strict Row-Bound Line Numbers */}
      <div className="p-4 md:p-5 overflow-x-auto bg-paper dark:bg-void">
        <div className="table w-full font-mono text-[11.5px] md:text-[12.5px] leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell select-none text-ink-soft/35 dark:text-void-soft/35 text-right pr-3.5 border-r border-line/40 dark:border-void-line/40 align-top w-8 min-w-[2rem]">
                {i + 1}
              </span>
              <span
                className="table-cell pl-3.5 align-top whitespace-pre text-ink dark:text-void-ink font-mono"
                dangerouslySetInnerHTML={{ __html: highlightLine(line) || "&nbsp;" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
