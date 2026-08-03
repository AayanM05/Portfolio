import clsx from "clsx";

/**
 * Signature visual motif: a YOLO-style detection bounding box.
 * Corner brackets appear on hover (or always, via `always`), with
 * an optional monospace tag label like a model's class/confidence readout.
 */
export default function DetectionFrame({
  children,
  tag,
  always = false,
  className = "",
}) {
  return (
    <div className={clsx("relative group", className)}>
      {tag && (
        <span
          className={clsx(
            "tag-mono absolute -top-9 left-0 flex items-center gap-1.5 text-accent dark:text-accent-dark transition-opacity duration-300 font-mono font-medium",
            always ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          {`{ ${tag} }`}
        </span>
      )}
      {children}
    </div>
  );
}
