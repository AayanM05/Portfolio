import { useState } from "react";
import { ImagePlus } from "lucide-react";

/**
 * Screenshot gallery placeholder, styled like a scattered photo album
 * rather than a flat grid — tiles overlap slightly and lift/sharpen
 * on hover. Drop real 16:9 screenshots at
 * /public/projects/{id}/1.jpg, 2.jpg, 3.jpg... and swap the placeholder
 * <div> below for <img src={`/projects/${id}/${n}.jpg`} className="w-full h-full object-cover" />.
 */
const LAYOUT = [
  { top: "0%", left: "0%", rotate: -4, w: "58%", z: 1 },
  { top: "8%", left: "46%", rotate: 3, w: "50%", z: 2 },
  { top: "52%", left: "6%", rotate: 2, w: "46%", z: 3 },
  { top: "58%", left: "50%", rotate: -3, w: "46%", z: 1 },
];

export default function Gallery({ id, count = 4 }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative h-[420px] md:h-[520px]">
      {Array.from({ length: count }).map((_, i) => {
        const pos = LAYOUT[i % LAYOUT.length];
        const isHovered = hovered === i;
        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="absolute aspect-video border border-line dark:border-void-line bg-paper dark:bg-void transition-all duration-300 ease-out cursor-pointer flex flex-col items-center justify-center gap-2 text-ink-soft dark:text-void-soft"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.w,
              transform: `rotate(${isHovered ? 0 : pos.rotate}deg) scale(${isHovered ? 1.06 : 1})`,
              zIndex: isHovered ? 10 : pos.z,
              opacity: isHovered ? 1 : 0.65,
              boxShadow: isHovered ? "0 20px 40px -12px rgba(0,0,0,0.25)" : "none",
            }}
          >
            <ImagePlus size={20} className="opacity-60" />
            <span className="tag-mono opacity-60">/{id}/{i + 1}.jpg · 16:9</span>
          </div>
        );
      })}
    </div>
  );
}
