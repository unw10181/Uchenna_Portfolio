import PixelCard from "./PixelCard";
import SectionTitle from "./SectionTitle";
import Icon from "./Icon";

const EMAIL = "uchennanwilliams@gmail.com";

export default function Contact() {
  return (
    <div id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        kicker="SAVE POINT"
        title="Contact"
        subtitle="Email instantly or generate a draft message (no backend)."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <PixelCard className="p-6">
          <div className="font-arcade text-xl">Direct</div>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">
            Best way to reach me:
          </p>

          <a
            className="mt-4 inline-flex items-center rounded-lg bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-4 py-3 text-xs font-black text-black shadow-glow"
            href={`mailto:${EMAIL}?subject=Portfolio%20Contact&body=Hey%20Uchenna%2C%0A%0A`}
          >
            <Icon name="mail" />
            {EMAIL}
          </a>
        </PixelCard>

        <PixelCard className="p-6" data-aos="fade-up" data-aos-duration="650">
          <div className="font-arcade text-xl">Quick Message</div>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">
            Opens an email draft using your mail client.
          </p>

          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const name = String(form.get("name") ?? "");
              const subject = encodeURIComponent(
                `Portfolio: ${String(form.get("subject") ?? "")}`,
              );
              const body = encodeURIComponent(
                `Name: ${name}\n\n${String(form.get("message") ?? "")}\n`,
              );
              window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
            }}
          >
            <input
              name="name"
              placeholder="Your name"
              className="w-full rounded-lg border border-black/10 bg-white/70 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400/40 dark:border-white/10 dark:bg-white/10"
            />
            <input
              name="subject"
              placeholder="Subject"
              className="w-full rounded-lg border border-black/10 bg-white/70 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400/40 dark:border-white/10 dark:bg-white/10"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg border border-black/10 bg-white/70 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400/40 dark:border-white/10 dark:bg-white/10"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-4 py-3 text-xs font-black text-black shadow-glow"
            >
              <Icon name="mail" /> OPEN EMAIL DRAFT
            </button>
          </form>
        </PixelCard>
      </div>
    </div>
  );
}
