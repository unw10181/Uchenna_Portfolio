import Icon from "./Icon";

export default function Nav({
  dark,
  onToggle,
  onJump,
}: {
  dark: boolean;
  onToggle: () => void;
  onJump: (id: string) => void;
}) {
  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => onJump("top")}
          className="group flex items-center gap-3"
        >
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-gradient-to-br from-purple-500/20 via-cyan-400/15 to-fuchsia-500/20 dark:border-white/10">
            <span className="font-arcade text-sm">UW</span>
          </div>
          <div>
            <div className="font-arcade text-sm leading-none">Uchenna</div>
            <div className="text-[11px] text-black/60 dark:text-white/60">
              Full-Stack • Security-minded
            </div>
          </div>
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          {[
            ["Projects", "projects"],
            ["Skills", "skills"],
            ["Timeline", "timeline"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => onJump(id)}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold shadow-sm hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
        >
          <Icon name={dark ? "sun" : "moon"} />
          {dark ? "LIGHT" : "DARK"}
        </button>
      </div>
    </div>
  );
}
