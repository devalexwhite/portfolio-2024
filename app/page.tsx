import Image from "next/image";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import MacImage from "@/public/mac-xl.svg";
import FloppyImage from "@/public/floppy.svg";
import AnimatedMountains from "@/components/AnimatedMountains";
import AnimatedProfileImage from "@/components/AnimatedProfileImage";
import FadeInRotate from "@/components/FadeInRotate";
import AnimatedGrid from "@/components/AnimatedGrid";
import TVContainer from "@/components/TVContainer";
import Link from "next/link";
import ArticeLink from "@/components/ArticleLink";
import { ArticleFrontmatter } from "./articles/[slug]/page";

export default function HomePage() {
  const blogFiles = fs.readdirSync(path.join('posts'))
  const articles = blogFiles.map(filename => {
    const content = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const parsed = matter(content)
    const frontMatter: ArticleFrontmatter = parsed.data as ArticleFrontmatter

    return {
      meta: frontMatter,
      slug: `/articles/${filename.replace('.mdx', '')}`
    }
  })

  return (
    <main className="bg-slate-900 min-w-screen min-h-screen  py-16">
      <header className="max-w-3xl mx-auto w-full px-6 ">
        <h1 className="uppercase text-5xl md:text-6xl font-sans font-black text-yellow-400  mb-8">
          Turn ideas <br />
          into <br />
          reality!
        </h1>
        <div className="border-2 border-yellow-400 w-full max-w-128 min-h-72 aspect-video mb-8 relative z-10">
          <div className="bg-slate-900 absolute top-0 left-0 right-0 flex items-center justify-center z-20">
            <AnimatedMountains />
          </div>
          <div className="hidden lg:block z-0 absolute -right-44 top-1/3 w-32">
            <FadeInRotate left={false}>
              <Image alt="Mac vector" src={MacImage} />
            </FadeInRotate>
          </div>
          <div className="hidden lg:block z-0 absolute -left-44 -rotate-12 top-1/3 w-32">
            <FadeInRotate left>
              <Image alt="Floppy vector" src={FloppyImage} />
            </FadeInRotate>
          </div>
          <AnimatedProfileImage />
          <div className="z-10 absolute bottom-0 left-0 right-0 h-3/4 overflow-hidden flex items-end">
            <AnimatedGrid />
          </div>
        </div>
        <h2 className="text-center">
          <span className="font-medium text-2xl md:text-6xl uppercase text-white mb-2 block md:tracking-widest">
            With Alex White
          </span>

          <span className="font-black text-5xl md:text-7xl uppercase text-yellow-400 tracking-tightest">
            Designer & Engineer
          </span>
        </h2>
      </header>
      <section className="max-w-3xl w-full px-6 my-16 mx-auto">
        <p className="text-white  text-left font-light text-lg">
          I'm your go-to code wrangler when killer products are the mission.
          Design chops? Check. Code fu? Yep. I'll turbocharge your idea from
          pixel to profit – product team captain right here.
        </p>
        <div className="mt-8">
          <h3 className="text-white font-black text-4xl italic mb-8 sm:mb-4">
            Reach out today...
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Link
              href="mailto:alex.white@hey.com"
              className="group inline-block w-full h-full"
            >
              <div className="group-hover:-translate-y-2 transition-all w-full h-48 sm:w-48 sm:h-48">
                <TVContainer>
                  <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center">
                    <div className="font-serif font-black text-2xl sm:text-3xl text-slate-200 pb-2">
                      @
                    </div>
                    <p className="text-sm sm:text-lg text-yellow-600 font-bold">
                      Send an Electronic Mail!
                    </p>
                  </div>
                </TVContainer>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/devalexwhite/"
              className="group inline-block w-full h-full"
            >
              <div className="group-hover:-translate-y-2 transition-all w-full h-48 sm:w-48 sm:h-48">
                <TVContainer>
                  <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center">
                    <div className="font-serif font-black text-2xl sm:text-3xl text-slate-200 pb-2">
                      in
                    </div>
                    <p className="text-sm sm:text-lg text-yellow-600 font-bold">
                      Find me on LinkedIn
                    </p>
                  </div>
                </TVContainer>
              </div>
            </Link>
            <Link
              href="/Alex White - UX Engineer - Resume.pdf"
              className="group inline-block w-full h-full"
            >
              <div className="group-hover:-translate-y-2 transition-all w-full h-48 sm:w-48 sm:h-48">
                <TVContainer>
                  <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center">
                    <div className="font-serif font-black text-2xl sm:text-3xl text-slate-200 pb-2">
                      pdf
                    </div>
                    <p className="text-sm sm:text-lg text-yellow-600 font-bold">
                      Download my Resume
                    </p>
                  </div>
                </TVContainer>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#fdfef0] w-full  p-16 text-[#0c1313]">
        <header className="w-full pb-8 mb-8 border-b border-[#a6a49a]">
          <h2 className="font-black text-4xl">Articles on Computing</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            articles.map(article =>
              <ArticeLink title={article.meta.title} summary={article.meta.summary} href={article.slug} />
            )
          }
        </div>
      </section>
      <section className="max-w-3xl mx-auto w-full px-6 my-16">
        Hi
      </section>
    </main>
  );
}
