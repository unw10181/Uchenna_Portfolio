export default function Icon({ name }: { name: string }) {
  const map: Record<string, string> = {
    bolt: "⚡",
    star: "★",
    mail: "✉",
    link: "⛓",
    download: "⬇",
    moon: "☾",
    sun: "☀",
    sword: "🗡",
    shield: "🛡",
  };

  return (
    <span aria-hidden className="mr-2">
      {map[name] || "•"}
    </span>
  );
}
