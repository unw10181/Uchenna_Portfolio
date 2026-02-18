export default function Footer() {
  return (
    <div className="border-t border-black/10 py-8 text-center text-[11px] text-black/60 dark:border-white/10 dark:text-white/60">
      <div className="font-arcade text-sm text-black/80 dark:text-white/80">
        GAME OVER?
      </div>
      <div className="mt-2">
        Built with React + Tailwind • Retro UI • © {new Date().getFullYear()}{" "}
        Uchenna Williams
      </div>
    </div>
  );
}
