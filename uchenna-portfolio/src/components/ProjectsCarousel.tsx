import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import SectionTitle from "./SectionTitle";
import Icon from "./Icon";
import { cn } from "../utils/cn";
import { projects } from "../data/project";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        kicker="STAGE SELECT"
        title="Projects Carousel"
        subtitle="AOS on scroll + Framer Motion on hover."
      />

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-xs font-bold hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
        >
          ◀ PREV
        </button>
        <div className="text-[11px] text-black/60 dark:text-white/60">
          Tip: swipe on mobile
        </div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-xs font-bold hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
        >
          NEXT ▶
        </button>
      </div>

      <div className="mt-5 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="min-w-0 flex-[0_0_92%] sm:flex-[0_0_58%] lg:flex-[0_0_40%]"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <PixelCard className="h-full">
                <motion.button
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  onClick={() => window.open(p.live, "_blank", "noreferrer")}
                  className="group w-full text-left"
                >
                  <div
                    className={cn("h-44 w-full bg-gradient-to-br", p.accent)}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      className="h-44 w-full object-cover opacity-95 transition group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-arcade text-xl">{p.title}</div>
                        <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                          {p.subtitle}
                        </div>
                      </div>
                      <div className="rounded-lg border border-black/10 bg-white/60 px-3 py-2 text-[11px] font-bold dark:border-white/10 dark:bg-white/10">
                        OPEN
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-black/10 bg-white/60 px-2 py-1 dark:border-white/10 dark:bg-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-bold">
                      <a
                        href={p.fe}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-center hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                      >
                        <Icon name="link" /> FRONTEND
                      </a>

                      <a
                        href={p.be ?? p.fe}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-center hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                      >
                        <Icon name="link" /> {p.be ? "BACKEND" : "GITHUB"}
                      </a>
                    </div>
                  </div>
                </motion.button>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
