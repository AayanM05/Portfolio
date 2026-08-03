export default function CodeBlock({ filename, code }) {
  return (
    <div className="border border-line dark:border-void-line overflow-hidden">
      {filename && (
        <div className="flex items-center gap-2 px-5 py-3 border-b border-line dark:border-void-line bg-ink/[0.03] dark:bg-void-ink/[0.03]">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="tag-mono text-ink-soft dark:text-void-soft">{filename}</span>
        </div>
      )}
      <pre className="p-5 md:p-6 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-ink dark:text-void-ink">{code}</code>
      </pre>
    </div>
  );
}
