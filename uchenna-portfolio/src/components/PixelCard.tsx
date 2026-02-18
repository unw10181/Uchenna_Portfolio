import { cn } from "../utils/cn";

export default function PixelCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-pixel border border-black/10 bg-white/70 shadow-pixel backdrop-blur dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] scanlines mix-blend-overlay" />
      {children}
    </div>
  );
}
