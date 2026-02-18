import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import Icon from "./Icon";

import meImg from "../assets/me.png";

const EMAIL = "uchennanwilliams@gmail.com";

export default function Hero() {
  return (
    <div className="relative overflow-hidden" id="top">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/25" />
        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/15" />
        <div className="absolute bottom-0 left-1/2 h-80 w-184 -translate-x-1/2 bg-linear-to-r from-purple-500/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center rounded-lg border border-black/10 bg-white/60 px-3 py-2 text-[11px] font-semibold text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <Icon name="bolt" /> QUEST LOG: Build • Secure • Ship
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-5 font-arcade text-3xl leading-tight sm:text-5xl"
            >
              Retro Dev Portfolio
              <span className="block bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                (Level: 1)
              </span>
            </motion.h1>

            <p className="mt-4 max-w-xl text-sm text-black/70 dark:text-white/70">
              Full-stack engineer with a security mindset. I build fast, clean
              web apps and love leveling up toward cloud security engineering.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Uchenna-Williams-Resume.pdf"
                download
                className="inline-flex items-center rounded-lg bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-4 py-3 text-xs font-bold text-black shadow-glow"
              >
                <Icon name="download" /> DOWNLOAD RESUME
              </a>

              <a
                href={`mailto:${EMAIL}?subject=Portfolio%20Contact&body=Hey%20Uchenna%2C%0A%0A`}
                className="inline-flex items-center rounded-lg border border-black/10 bg-white/70 px-4 py-3 text-xs font-bold text-black/80 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
              >
                <Icon name="mail" /> EMAIL ME
              </a>

              <a
                href="#projects"
                className="inline-flex items-center rounded-lg border border-black/10 bg-white/70 px-4 py-3 text-xs font-bold text-black/80 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
              >
                <Icon name="star" /> VIEW PROJECTS
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <PixelCard className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-arcade text-xs text-purple-500/90 dark:text-cyan-300/90">
                    PLAYER CARD
                  </div>
                  <div className="mt-2 font-arcade text-xl">
                    Uchenna Williams
                  </div>
                  <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                    Class: Full-Stack • Subclass: Security
                  </div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white/60 px-3 py-2 text-[11px] font-semibold dark:border-white/10 dark:bg-white/10">
                  LVL 27
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[120px_1fr] sm:items-center">
                <div className="relative mx-auto h-30 w-30 overflow-hidden rounded-xl border border-black/10 shadow-sm dark:border-white/10">
                  <img
                    src={meImg}
                    alt="Portrait"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-black/70 dark:text-white/70">
                      <span>XP</span>
                      <span>82 / 100</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/10">
                      <div className="h-full w-[82%] bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg border border-black/10 bg-white/60 p-3 dark:border-white/10 dark:bg-white/10">
                      <div className="font-semibold text-black/70 dark:text-white/70">
                        Main Quest
                      </div>
                      <div className="mt-1 text-black/60 dark:text-white/60">
                        Software Engineer
                      </div>
                    </div>
                    <div className="rounded-lg border border-black/10 bg-white/60 p-3 dark:border-white/10 dark:bg-white/10">
                      <div className="font-semibold text-black/70 dark:text-white/70">
                        Side Quest
                      </div>
                      <div className="mt-1 text-black/60 dark:text-white/60">
                        UI/UX Systems
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
