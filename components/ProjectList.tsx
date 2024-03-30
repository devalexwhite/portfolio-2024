"use client";

import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PROJECTS: Array<Project> = [
  {
    name: "AeroFlow Dynamics Shopify Website",
    summary:
      "Working closely with my client, I designed and developed a beautiful, modern website for this car parts store.",
    image: "/projects/aeroflow-dynamics.jpeg",
    link: "/content/projects/aeroflow-dynamics",
    date: "2024",
    tech: ["CSS", "JavaScript", "Shopify"],
  },
  {
    name: "mdJournal",
    summary:
      "Blogging as simple as drag-and-drop! Designed and developed with the goal of making a frictionless blogging experience.",
    image: "/projects/mdjournal.jpeg",
    link: "/content/projects/mdjournal",
    date: "2024",
    tech: ["Supabase", "NextJS", "SQL"],
  },
  {
    name: "RevLocal Marketing Platform",
    summary:
      "An all in one spot for clients to gain in-depth, meaningful insights into their digital marketing services.",
    image: "/projects/marketing-platform.jpeg",
    link: "/content/projects/marketing-platform",
    date: "2023",
    tech: ["Figma", "User Research"],
  },
];

const Project = ({ name, summary, date, image, link, tech }: Project) => {
  return (
    <motion.li
      variants={{
        hidden: {
          marginTop: -100,
          opacity: 0,
        },
        visible: {
          marginTop: 0,
          opacity: 1,
        },
      }}
    >
      <Link
        href={link}
        className="w-full flex flex-col sm:flex-row px-8 py-4 gap-6 sm:gap-12"
      >
        <Image
          className="rounded-lg overflow-hidden shadow-sm object-cover sm:w-auto w-full"
          src={image}
          width={200}
          height={150}
          alt={`Project image for ${name}`}
        ></Image>
        <div className="flex-1">
          <header className="mb-2">
            <div className="font-bold text-slate-800 text-lg">{name}</div>
            {date && (
              <div className="text-sm text-slate-500 font-light">
                Project completed in {date}
              </div>
            )}
          </header>
          <div className="text-slate-600 text-base font-light">{summary}</div>
          <ul className="flex flex-row flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            {tech.map((item) => (
              <li className="text-sm font-medium text-slate-50 bg-blue-400 rounded-full px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.li>
  );
};

export default function ProjectList() {
  return (
    <motion.ul
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      className="overflow-hidden shadow-inner w-full bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg not-prose divide-y"
    >
      {PROJECTS.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </motion.ul>
  );
}
