import Link from "next/link";

export interface ArticleLink {
    title: string;
    summary: string;
    href: string;
}

export default function ArticeLink({ title, summary, href }: ArticleLink) {
    return <section><Link href={href} className="p-8 border-[#a6a49a] text-[#202225] border-2 flex flex-col gap-4">
        <header>
            <h3 className="font-black font-serif text-3xl">{title}</h3>
        </header>
        <main>
            <p className="mb-4 text-base font-medium leading-relaxed">{summary}</p>
            <div className="underline text-blue-600 text-lg">Read More</div>
        </main>
    </Link></section>

}