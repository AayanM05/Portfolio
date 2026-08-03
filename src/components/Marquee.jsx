const ITEMS = [
  "JAVA", "SPRING BOOT", "PYTHON", "DJANGO", "POSTGRESQL", "MYSQL",
  "JAVASCRIPT", "HTML / CSS", "YOLOv8", "REDIS", "CELERY", "RAZORPAY",
  "FIREBASE", "GIT & GITHUB", "REST APIs", "DOCKER", "LINUX",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-line dark:border-void-line py-5 bg-paper dark:bg-void">
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {track.map((item, i) => (
            <div key={i} className="flex items-center gap-24 pr-24 shrink-0">
              <span className="font-display text-xl md:text-2xl tracking-[0.08em] text-ink dark:text-void-ink drop-shadow-none [text-shadow:none]">
                {`[ ${item} ]`}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
