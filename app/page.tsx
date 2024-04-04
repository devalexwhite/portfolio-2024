import DesktopBackground from "@/components/DesktopBackground";
import Launcher from "@/components/Launcher";
import Image from "next/image";

import HomeBio from "@/components/HomeBio";
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden min-w-screen min-h-screen relative">
      <div className="z-20 relative w-full h-full p-8 flex items-start sm:items-center justify-center overflow-y-auto">
        <DesktopBackground src="https://images.unsplash.com/photo-1528164344705-47542687000d" />
        <div className="w-full flex flex-col md:flex-row gap-8">
          <HomeBio />
          <div className="flex-1 z-20 w-full flex items-center justify-center px-8">
            <Launcher />
          </div>
        </div>
      </div>
    </div>
  );
}
