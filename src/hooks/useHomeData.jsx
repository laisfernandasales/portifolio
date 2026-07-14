import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaEnvelope } from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiMysql, SiMongodb, SiFirebase, SiFigma, SiGit,
  SiFastapi, SiJsonwebtokens,
} from "react-icons/si";

import ViagensMercadoLight from "../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import ViagensMercadoDark  from "../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import PfireLoginLight     from "../assets/Pfire/LoginLight.png";
import PfireLoginDark      from "../assets/Pfire/LoginDark.png";
import PsafeLoginLight     from "../assets/Psafe365Cloud/HomeLight.png";
import PsafeLoginDark      from "../assets/Psafe365Cloud/HomeDark.png";

import projectsData from "../data/projects.json";

const imageMap = {
  viagens: { image: ViagensMercadoLight, imageDark: ViagensMercadoDark },
  pfire:   { image: PfireLoginLight,     imageDark: PfireLoginDark     },
  psafe:   { image: PsafeLoginLight,     imageDark: PsafeLoginDark     },
};

export const projects = projectsData.map(({ imageKey, ...rest }) => ({
  ...rest,
  ...imageMap[imageKey],
}));

export function useSkillCategories() {
  const { t } = useTranslation();
  return [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5       style={{ color: "#E44D26" }} />, name: "HTML5",      tipKey: "home.stack.tips.html5"      },
        { icon: <FaCss3Alt     style={{ color: "#1572B6" }} />, name: "CSS3",       tipKey: "home.stack.tips.css3"       },
        { icon: <SiJavascript  style={{ color: "#F7DF1E" }} />, name: "JavaScript", tipKey: "home.stack.tips.javascript" },
        { icon: <SiTypescript  style={{ color: "#3178C6" }} />, name: "TypeScript", tipKey: "home.stack.tips.typescript" },
        { icon: <FaReact       style={{ color: "#61DAFB" }} />, name: "React",      tipKey: "home.stack.tips.react"      },
        { icon: <SiNextdotjs   style={{ color: "#ffffff" }} />, name: "Next.js",    tipKey: "home.stack.tips.nextjs"     },
        { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, name: "Tailwind",   tipKey: "home.stack.tips.tailwind"   },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs  style={{ color: "#339933" }} />, name: "Node.js", tipKey: "home.stack.tips.nodejs"  },
        { icon: <FaPhp     style={{ color: "#8892BF" }} />, name: "PHP",     tipKey: "home.stack.tips.php"     },
        { icon: <SiFastapi style={{ color: "#009688" }} />, name: "FastAPI", tipKey: "home.stack.tips.fastapi" },
      ],
    },
    {
      title: t("home.stack.categories.database"),
      skills: [
        { icon: <SiMysql    style={{ color: "#4479A1" }} />, name: "MySQL",    tipKey: "home.stack.tips.mysql"    },
        { icon: <SiMongodb  style={{ color: "#47A248" }} />, name: "MongoDB",  tipKey: "home.stack.tips.mongodb"  },
        { icon: <SiFirebase style={{ color: "#FF6F00" }} />, name: "Firebase", tipKey: "home.stack.tips.firebase" },
      ],
    },
    {
      title: t("home.stack.categories.tools"),
      skills: [
        { icon: <SiJsonwebtokens style={{ color: "#d63aff" }} />, name: "JWT",   tipKey: "home.stack.tips.jwt"   },
        { icon: <FaEnvelope      style={{ color: "#0B996E" }} />, name: "Brevo", tipKey: "home.stack.tips.brevo" },
        { icon: <SiFigma         style={{ color: "#F24E1E" }} />, name: "Figma", tipKey: "home.stack.tips.figma" },
        { icon: <SiGit           style={{ color: "#F05032" }} />, name: "Git",   tipKey: "home.stack.tips.git"   },
      ],
    },
  ];
}
