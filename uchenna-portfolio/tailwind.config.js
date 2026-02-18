/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: [
          "'ArcadeClassic'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        pixel: "0 0 0 2px rgba(255,255,255,0.12), 0 12px 40px rgba(0,0,0,0.35)",
        glow: "0 0 0 2px rgba(168,85,247,0.35), 0 0 36px rgba(34,211,238,0.25)",
      },
      borderRadius: {
        pixel: "14px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 160px" },
        },
      },
      animation: {
        floaty: "floaty 3.2s ease-in-out infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
