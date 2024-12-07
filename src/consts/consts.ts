import AstroIcon from "@/icons/AstroIcon.astro";
import Css from "@/icons/Css.astro";
import Git from "@/icons/Git.astro";
import Html from "@/icons/Html.astro";
import JavaScript from "@/icons/JavaScript.astro";
import Mysql from "@/icons/Mysql.astro";
import NextJs from "@/icons/NextJs.astro";
import React from "@/icons/React.astro";
import Tailwind from "@/icons/Tailwind.astro";
import TypeScript from "@/icons/TypeScript.astro";

interface SkillsIconProps {
  Icon: any;
  name: string;
}

export const SkillsIcons: SkillsIconProps[] = [
  {
    Icon: Html,
    name: "Html",
  },
  {
    Icon: Css,
    name: "Css",
  },
  {
    Icon: JavaScript,
    name: "JavaScript",
  },
  {
    Icon: AstroIcon,
    name: "Astro",
  },
  {
    Icon: Tailwind,
    name: "Tailwind",
  },
  {
    Icon: React,
    name: "React",
  },
  {
    Icon: NextJs,
    name: "Next.Js",
  },
  {
    Icon: TypeScript,
    name: "TypeScript",
  },
  {
    Icon: Mysql,
    name: "MySql",
  },
  {
    Icon: Git,
    name: "Git",
  },
];
