import Dock from "@/components/Dock";
import "./content.css";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative my-4 sm:my-16 mx-4 sm:mx-16">
        <article className="prose lg:prose-lg max-w-4xl w-full mx-auto pb-16">
          {children}
        </article>
      </div>
      <Dock />
    </>
  );
}
