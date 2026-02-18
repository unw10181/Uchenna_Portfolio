import PixelCard from "./PixelCard";
import SectionTitle from "./SectionTitle";
import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <div id="timeline" className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        kicker="STORY MODE"
        title="Developer Timeline"
        subtitle="Quest progression timeline."
      />

      <div className="grid gap-4">
        {timeline.map((t, idx) => (
          <div key={t.year} data-aos="fade-up" data-aos-duration="650">
            <PixelCard className="p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 font-arcade text-sm text-black">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-arcade text-lg">{t.title}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">
                      {t.detail}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-black/10 bg-white/60 px-3 py-2 text-xs font-bold dark:border-white/10 dark:bg-white/10">
                  {t.year}
                </div>
              </div>
            </PixelCard>
          </div>
        ))}
      </div>
    </div>
  );
}
