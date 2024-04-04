"use client";

import { ArrowLeft } from "iconoir-react";
import Link from "next/link";
import { ReactElement } from "react";
import { motion } from "framer-motion";

export default function AppHeader({
  title,
  icon,
}: {
  title: string;
  icon: ReactElement;
}) {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className=" from-slate-100 to-slate-200 bg-gradient-to-b rounded-full my-8 sm:my-16 px-8 py-3 not-prose flex flex-row gap-8 items-center"
    >
      <Link href="/" className="flex flex-row items-center gap-1 group shrink-0">
        <ArrowLeft className=" w-[32px] h-[32px] sm:h-[16px] sm:w-[16px] text-slate-600 group-hover:-translate-x-1 group-hover:text-slate-700 transition-all" />
        <div className="font-medium hidden sm:block text-sm text-slate-700">
          Go Back
        </div>
      </Link>

      <div className="flex flex-row items-center justify-center gap-3">
        {icon}
        <h1 className="font-bold text-lg sm:text-xl text-slate-800">{title}</h1>
      </div>
    </motion.header>
  );
}
