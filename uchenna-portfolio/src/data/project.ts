import type { Project } from "../types";

import cryptoImg from "../assets/cryptosensei.png";
import natureImg from "../assets/nature.png";
import countriesImg from "../assets/countries.png";

export const projects: Project[] = [
  {
    title: "CryptoSensei",
    subtitle: "Risk-free crypto trading application",
    stack: ["MERN", "Vite", "TailwindCSS"],
    live: "https://cryptosenseii.netlify.app/login",
    fe: "https://github.com/unw10181/cryptoSensei",
    be: "https://github.com/unw10181/cryptoSensei-backend",
    image: cryptoImg,
    accent: "from-cyan-400/30 via-purple-500/20 to-fuchsia-500/30",
  },
  {
    title: "Nature",
    subtitle: "Instagram clone for outdoor photos",
    stack: ["MERN", "Next.js", "Cloudinary"],
    live: "https://instagram-clone2-nu.vercel.app/admin",
    fe: "https://github.com/unw10181/instagram-clone2",
    be: "https://github.com/unw10181/instagram-clone2-backend",
    image: natureImg,
    accent: "from-emerald-400/25 via-sky-500/15 to-purple-500/25",
  },
  {
    title: "Countries API",
    subtitle: "Responsive country explorer (REST Countries)",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://unw10181.github.io/Countries-Api/",
    fe: "https://github.com/unw10181/Countries-Api",
    image: countriesImg,
    accent: "from-amber-400/20 via-rose-500/15 to-violet-500/25",
  },
];
