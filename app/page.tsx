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
  }).sort((a, b) => {
    const dateA = new Date(a.meta.date)
    const dateB = new Date(b.meta.date)

    return dateB.getTime() - dateA.getTime()
  })

  return (
    <main className="bg-slate-900 min-w-screen min-h-screen  pt-16">
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
      <section className="bg-[#fdfef0] w-full  py-16 px-6 text-[#0c1313]">
        <header className="w-full pb-8 mb-8 border-b border-[#a6a49a]">
          <h2 className="font-black text-5xl">Articles on Computing</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            articles.map(article =>
              <ArticeLink title={article.meta.title} summary={article.meta.summary} href={article.slug} />
            )
          }
        </div>
      </section>
      <section className="w-full px-6 my-16 relative">
        <header className="w-full pb-8 mb-16 text-white">
          <h2 className="font-black text-5xl">Projects That Are <strong className="italic text-yellow-400">Out of This World</strong></h2>
        </header>
        <div className="flex flex-wrap justify-center gap-32 z-20">
          <Link href="https://github.com/devalexwhite/SvOS" target="_blank" className="box hover:shadow-xl transition-all block">
            <div className="box-spine bg-slate-200" />
            <div className="box-top bg-slate-300" />
            <div className="relative box-cover bg-green-300">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-2 border-black border-2 z-30" />
              <div className="text-center py-3 px-2">
                <h4 className="mb-3 font-bold text-2xl">SvOS</h4>
                <p className="text-xs font-serif italic font-medium text-center">The Svelte Based Operating System...in Your Browser!</p>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <Image alt="Screenshot of a browser based operating system" src="/projects/svos-screenshot.png" width={766} height={689} className="flex-1 object-cover grayscale" />
              </div>
            </div>

          </Link>

          <Link href="https://github.com/devalexwhite/mdjournal" target="_blank" className="box hover:shadow-xl transition-all block">
            <div className="box-spine bg-slate-200" />
            <div className="box-top bg-slate-300" />
            <div className="relative box-cover bg-slate-700">
              <div className="absolute top-0 left-0 right-0 bottom-0 ml-2 border-white border-l-2 z-30" />
              <div className="text-center  py-3 px-2">
                <h4 className="mb-3 font-bold text-2xl text-yellow-400">mdJournal</h4>
                <p className="text-xs font-medium text-center text-white">The Fast Way to Start Your Own Blog!</p>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <Image alt="Screenshot of a mdJournal app" src="/projects/mdjournal-screenshot.png" width={1228} height={1048} className="flex-1 object-cover grayscale" />
              </div>
            </div>
          </Link>

          <Link href="https://github.com/devalexwhite/WeightTracker-PalmOS" target="_blank" className="box hover:shadow-xl transition-all block">
            <div className="box-spine bg-slate-200" />
            <div className="box-top bg-slate-300" />
            <div className="relative flex flex-col h-full overflow-hidden box-cover bg-slate-400">
              <div className="absolute top-0 left-0 right-0 bottom-0 ml-2 border-white border-l-2 z-30" />
              <div className="text-center  py-3 px-2">
                <h4 className="mb-3 font-bold text-2xl">Weight Tracker</h4>
                <p className="text-xs font-medium text-center text-white">Manage Your Health on Palm OS!</p>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <Image alt="Screenshot of weight tracker app on a Palm Pilot" src="/projects/weight-tracker-screenshot.png" width={476} height={677} className="max-h-full object-contain grayscale" />
              </div>
            </div>
          </Link>

          <Link href="https://github.com/devalexwhite/GemPlace" target="_blank" className="box hover:shadow-xl transition-all block">
            <div className="box-spine bg-slate-200" />
            <div className="box-top bg-slate-300" />
            <div className="relative flex flex-col h-full overflow-hidden box-cover bg-cover bg-center" style={{ backgroundImage: "url('/projects/gemplace-screenshot.png')" }}>
              <div className="absolute top-0 left-0 right-0 bottom-0 m-2 border-black border-2 z-30" />
              <div className="flex h-full w-full items-center justify-center flex-col  py-3 px-2">
                <h4 className="mb-3 font-bold text-2xl">GemPlace</h4>
                <p className="text-xs font-medium text-center text-slate-800">The <span className="text-red-700 font-bold">hottest</span> game on the Gemini TCP Protocol</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <footer className="w-full bg-[#fefcf0] px-8 py-4">
        <div className="max-w-2xl mx-auto flex-col">
          <div className=" flex-col-reverse md:flex-row flex w-full md:gap-8">
            <div className="flex-1">
              <div className="hidden md:flex flex-row md:justify-end gap-32">
                <svg width={100} height={100} stroke="#4b4642" className="mr-16 mb-8">
                  <line x1={10} x2={10} y1={0} y2={100} strokeWidth={4} />
                  <line x1={20} x2={20} y1={0} y2={100} strokeWidth={4} />
                  <line x1={30} x2={30} y1={0} y2={100} strokeWidth={4} />
                  <line x1={50} x2={50} y1={0} y2={100} strokeWidth={4} />
                  <line x1={70} x2={70} y1={0} y2={100} strokeWidth={4} />
                  <line x1={80} x2={80} y1={0} y2={100} strokeWidth={4} />
                </svg>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="mb-8 w-full py-2 px-6 border-4 border-[#4b4642] text-[#4b4642] uppercase tracking-tighter leading-tight">
                  <div className="text-xl md:text-3xl font-black">Personal Portoflio Website</div>
                  <div className="flex text-xs md:text-base font-medium justify-between w-full">
                    <div className="flex-1">First class</div>
                    <div className="flex-1 text-center">Permit No. N/A</div>
                    <div className="flex-1 text-right">Hilliard, OH</div>
                  </div>
                </div>

                <div className="mb-8 md:mb-0">
                  <div className="text-4xl md:text-6xl font-black text-[#4b4642] uppercase tracking-tighter">Alex White!</div>
                  <div className="text-sm md:text-base font-medium text-[#4b4642] uppercase tracking-tighter">Hilliard, OH</div>
                  <div className="text-sm md:text-base font-medium text-[#4b4642] uppercase tracking-tighter">United States of America</div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col gap-8 md:gap-1 pt-6">
              <div className="flex items-center justify-center p-2 w-36 h-36 text-center  border-4 border-[#4b4642] text-[#4b4642] uppercase tracking-tighter leading-tight text-lg">
                No postage necessary if mailed in the united states
              </div>
              <svg width={150} height={180} stroke="#4b4642" className="hidden md:block">
                <line x1={0} x2={150} y1={10} y2={10} strokeWidth={12} />
                <line x1={0} x2={150} y1={30} y2={30} strokeWidth={12} />
                <line x1={0} x2={150} y1={50} y2={50} strokeWidth={12} />
                <line x1={0} x2={150} y1={70} y2={70} strokeWidth={12} />
                <line x1={0} x2={150} y1={90} y2={90} strokeWidth={12} />
                <line x1={0} x2={150} y1={110} y2={110} strokeWidth={12} />
                <line x1={0} x2={150} y1={130} y2={130} strokeWidth={12} />
                <line x1={0} x2={150} y1={150} y2={150} strokeWidth={12} />
                <line x1={0} x2={150} y1={170} y2={170} strokeWidth={12} />
              </svg>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <svg width={310} height={40} stroke="#4b4642">
              <line x1={10} x2={10} y1={30} y2={0} strokeWidth={2} />
              <line x1={20} x2={20} y1={30} y2={20} strokeWidth={2} />
              <line x1={30} x2={30} y1={30} y2={0} strokeWidth={2} />
              <line x1={40} x2={40} y1={30} y2={0} strokeWidth={2} />
              <line x1={50} x2={50} y1={30} y2={20} strokeWidth={2} />
              <line x1={60} x2={60} y1={30} y2={20} strokeWidth={2} />
              <line x1={70} x2={70} y1={30} y2={20} strokeWidth={2} />
              <line x1={80} x2={80} y1={30} y2={20} strokeWidth={2} />
              <line x1={90} x2={90} y1={30} y2={20} strokeWidth={2} />
              <line x1={100} x2={100} y1={30} y2={0} strokeWidth={2} />
              <line x1={110} x2={110} y1={30} y2={20} strokeWidth={2} />
              <line x1={120} x2={120} y1={30} y2={0} strokeWidth={2} />
              <line x1={130} x2={130} y1={30} y2={0} strokeWidth={2} />
              <line x1={140} x2={140} y1={30} y2={20} strokeWidth={2} />
              <line x1={150} x2={150} y1={30} y2={20} strokeWidth={2} />
              <line x1={160} x2={160} y1={30} y2={20} strokeWidth={2} />
              <line x1={170} x2={170} y1={30} y2={20} strokeWidth={2} />
              <line x1={180} x2={180} y1={30} y2={20} strokeWidth={2} />
              <line x1={190} x2={190} y1={30} y2={0} strokeWidth={2} />
              <line x1={200} x2={200} y1={30} y2={20} strokeWidth={2} />
              <line x1={210} x2={210} y1={30} y2={0} strokeWidth={2} />
              <line x1={220} x2={220} y1={30} y2={0} strokeWidth={2} />
              <line x1={230} x2={230} y1={30} y2={20} strokeWidth={2} />
              <line x1={240} x2={240} y1={30} y2={20} strokeWidth={2} />
              <line x1={250} x2={250} y1={30} y2={20} strokeWidth={2} />
              <line x1={260} x2={260} y1={30} y2={20} strokeWidth={2} />
              <line x1={270} x2={270} y1={30} y2={20} strokeWidth={2} />
              <line x1={280} x2={280} y1={30} y2={0} strokeWidth={2} />
              <line x1={290} x2={290} y1={30} y2={20} strokeWidth={2} />
              <line x1={300} x2={300} y1={30} y2={0} strokeWidth={2} />
            </svg>
          </div>
        </div>
      </footer>
    </main>
  );
}
