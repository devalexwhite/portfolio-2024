"use client"
import { AppIcon } from "@/types/AppIcon";
import { Code, DownloadCircle, Linkedin, Mail, Post, TestTube, User } from "iconoir-react";
import tinygradient from "tinygradient";
import { AnimatePresence, motion, useAnimate } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";

const SAMPLE_APPS: Array<AppIcon> = [
    {
        appName: 'About Alex',
        gradient: ['#4A5899', '#8C5383'],
        icon: <User color="white" />,
    },
    {
        appName: 'Projects',
        gradient: ['#38405F', '#59546C '],
        icon: <Code color="white" />,
    },
    {
        appName: 'Resume',
        gradient: ['#122C34', '#224870'],
        icon: <DownloadCircle color="white" />,
    },
    {
        appName: 'Contact',
        gradient: ['#664C43', '#873D48'],
        icon: <Mail color="white" />,
    },
    {
        appName: 'Blog',
        gradient: ['#FFCAD4', '#B0D0D3'],
        icon: <Post color="black" />,
    },
    {
        appName: 'LinkedIn',
        gradient: ['#D0B8AC', '#F3D8C7'],
        icon: <Linkedin color="black" />,
    },
]

interface AppIconComponent extends AppIcon {
    onLaunch: () => {}
}

const AppIcon = ({ appName, gradient, icon, onLaunch }: AppIconComponent) => {
    const gradientStyle = tinygradient(gradient)

    return <motion.li
        variants={{
            hidden: {
                y: -40,
                opacity: 0,
                filter: "blur(4px)"
            },
            visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)"
            }
        }}
    >
        <button className="flex flex-col items-center justify-center gap-4 group" onClick={onLaunch}>
            <div
                style={{ backgroundImage: gradientStyle.css('radial') }}
                className={`w-[64px] h-[64px] flex items-center justify-center shadow-md rounded-full group-hover:-translate-y-1 transition-all group-hover:ring-4 ring-blue-500 bg-transparent`}>
                {icon}
            </div>
            <div className="text-sm text-white bg-black/10 backdrop-blur-lg px-2 py-1 rounded-lg font-medium text-center">{appName}</div>
        </button>
    </motion.li>
}

export default function Launcher() {
    const [scope, animate] = useAnimate()
    const router = useRouter()

    const handleLaunchApp = async () => {
        await animate(scope.current, { scale: 3, opacity: 0 }, { duration: 0.5 })
        router.push("/about")
    }

    return <AnimatePresence>
        <motion.ul
            ref={scope}
            variants={{
                visible: {
                    transition: {
                        delayChildren: 1,
                        staggerChildren: 0.1
                    }
                },
                out: {
                    scale: 3,
                    opacity: 0
                }
            }}
            exit="out"
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-20 gap-y-32">
            {
                SAMPLE_APPS.map(app => <AppIcon onLaunch={handleLaunchApp} {...app} />)
            }
        </motion.ul>
    </AnimatePresence>
}