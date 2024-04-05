import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export interface ArticleFrontmatter {
    title: string;
    author: string;
    location: string;
    summary: string;
    date: string;
}

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function ArticlePage({ params }: any) {
    const props = getPost(params);
    const frontMatter: ArticleFrontmatter = props.frontMatter as ArticleFrontmatter;

    return <><nav className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center w-full mb-16 pb-2 border-b border-[#a6a49a] ">
        <Link href="/" className="flex-1 group flex flex-row gap-1 items-center justify-start text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:-translate-x-1 transition-all w-5 h-5">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>

            <span className="font-light text-base group-hover:text-blue-700 transition-all">Go back</span>
        </Link>
        <div className="font-black text-lg text-center text-black flex-1 hidden sm:block">Alex White!</div>
        <div className="flex-1 text-right font-light text-[#202225] text-base">
            {frontMatter.date}
        </div>
    </nav>
        <article className="max-w-2xl mx-auto">
            <h1 className='text-5xl md:text-6xl font-bold font-serif text-[#202225]'>{frontMatter.title}</h1>

            <div className='text-[#8e8b84] text-2xl tracking-tight leading-tighter font-light my-8'>
                {frontMatter.author}<br />{frontMatter.location}
            </div>

            <div className='prose md:prose-xl mt-16'>
                <MDXRemote source={props.content} />
            </div>
        </article>
    </>
}