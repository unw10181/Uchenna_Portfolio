import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import SectionTitle from "./SectionTitle";
import Icon from "./Icon";
import { skills } from "../data/skills";

export default function SkillsPanel() {
  return (
    <div id="skills" className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle kicker="LOADOUT" title="Skills" subtitle="" />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            data-aos="fade-up"
            data-aos-duration="650"
          >
            <PixelCard className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-arcade text-lg">{s.name}</div>
                <div className="rounded-lg bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-3 py-1 text-xs font-black text-black">
                  RANK {s.rank}
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-black/70 dark:text-white/70">
                  <span>XP</span>
                  <span>{s.level}/100</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/10">
                  <div
                    className="h-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-black/60 dark:text-white/60">
                <span className="rounded-md border border-black/10 bg-white/60 px-2 py-1 dark:border-white/10 dark:bg-white/10">
                  <Icon name="sword" /> Damage: {Math.round(s.level / 10)}/10
                </span>
                <span className="rounded-md border border-black/10 bg-white/60 px-2 py-1 dark:border-white/10 dark:bg-white/10">
                  <Icon name="shield" /> Defense:{" "}
                  {Math.max(1, Math.round((100 - s.level) / 12))}/10
                </span>
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
