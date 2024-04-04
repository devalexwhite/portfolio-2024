'use client'
import {
    motion
} from 'framer-motion'
import Image from 'next/image'

export default function HomeBio() {
    return (<motion.div
        initial={{
            opacity: 0,
            marginTop: -20
        }}
        animate={{
            opacity: 1,
            marginTop: 0
        }}
        transition={{
            duration: 0.5,
            delay: 2
        }}
        className="md:w-1/3 z-20 flex flex-col items-center justify-center text-center bg-black/10 backdrop-blur-lg px-2 py-1 rounded-lg">
        <Image alt="Image of Alex White" src="/profile.webp" width={150} height={150} className="mb-8 rounded-full" />
        <h1 className="text-white  font-black text-center text-2xl sm:text-3xl">Design Focused UX<br /> Engineer</h1>
    </motion.div>)
}