"use client";

import { motion } from "framer-motion";
import ProfileImage from "@/public/profile.png";
import Image from "next/image";

export default function AnimatedProfileImage() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          translateY: 80,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-yellow-400 z-30"
      >
        <Image
          alt="Image of Alex White"
          src={ProfileImage}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
