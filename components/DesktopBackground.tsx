"use client"
import { motion } from "framer-motion"

export default function DesktopBackground({ src }: { src: string }) {
    return <div className="w-screen h-screen absolute top-0 left-0 z-10">
        <motion.img
            className="h-full w-full object-cover"
            initial={{
                scale: 1.5,
                filter: "blur(64px)",
                opacity: 0
            }}
            animate={{
                scale: 1,
                filter: "blur(4px)",
                opacity: 1
            }}
            transition={{
                duration: 0.8,
                delay: 0.5
            }}
            src={src}
        >
        </motion.img>
    </div>
}