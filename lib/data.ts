import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "public/corpcomment.png";
import rmtdevImg from "public/rmtdev.png";
import wordanalyticsImg from "public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Newton School(MERN)",
    description:
      "I graduated after 6 months of learning DSA, Javascript, ReactJs and Java. I was recruiuted to be a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full stack Developer, Teachmint Technologies",
    location: "Teachmint Technologies",
    description:
      "I worked as a full-end developer for a year using Ruby on Rails, React and JavaScript and PostgreSQL. Hands-on experience in sso, payment gateways, third party tools, refactoring code, building new features.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Teachmint Technologies",
    description:
      "Was moved to different project after a year, where I got to work with Python, Flask, ReactJs, MongoDB and designing HLD and LLD. Additionaly was involved in building in house CRM Software and also integrated Strapi for Content Management",
    icon: React.createElement(FaPython),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    id: 2,
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    id: 3,
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React",
	"Flask",
	"Ruby on Rails",
  "PostgreSQL",
  "JavaScript",
  "Python",
  "TypeScript",
  "Next.js",
	"Java",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "CSS",
  "GraphQL",
  "Django",
  "Framer Motion",
  "HTML",
] as const;