import Link from "next/link";
import { ReactElement } from "react"



export interface ArticleLayout {
    children: ReactElement;
}

export default function ArticleLayout({ children }: ArticleLayout) {
    return <main className="min-w-screen min-h-screen text-[#202225] bg-[#fdfef0] py-8 px-8">
        {children}
    </main >
}