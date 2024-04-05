"use client";
import { ReactElement } from "react";
import { motion } from "framer-motion";

export default function FadeInRotate({
  left,
  children,
}: {
  left: boolean;
  children: ReactElement;
}) {
  return (
    <motion.div
      initial={{
        rotateZ: 0,
        opacity: 0,
        marginRight: left ? 0 : 50,
        marginLeft: left ? 50 : 0,
      }}
      animate={{
        rotateZ: left ? -20 : 30,
        opacity: 1,
        marginRight: 0,
        marginLeft: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
