"use client";
import { Home } from "iconoir-react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export default function Dock() {
  const { scrollY } = useScroll();

  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <>
      <div className="fixed bottom-4 w-full flex items-center justify-center z-20 px-4">
        <AnimatePresence>
          {hookedYPostion > 100 && (
            <motion.nav
              className="w-full sm:w-auto relative rounded-full from-slate-100 to-slate-200 bg-gradient-to-b border border-slate-300 px-16 py-2"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
                out: {
                  opacity: 0,
                  y: 100,
                },
                hidden: {
                  opacity: 0,
                  y: 100,
                },
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              exit="out"
              initial="hidden"
              animate="visible"
            >
              <ul className="flex w-full items-center justify-center gap-32">
                <li className=" transition-all hover:scale-125 hover:border-blue-400 hover:border-2 w-[45px] h-[45px] shadow-md rounded-full flex items-center justify-center bg-gradient-radial from-blue-200 to-blue-300 border-blue-400 border">
                  <Link href="/">
                    <Home />
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
