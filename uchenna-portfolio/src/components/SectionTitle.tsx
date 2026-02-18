export default function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <div className="font-arcade text-xs tracking-widest text-purple-500/90 dark:text-cyan-300/90">
        {kicker}
      </div>
      <h2 className="mt-2 font-arcade text-2xl sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-black/70 dark:text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
