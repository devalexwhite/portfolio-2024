import DesktopBackground from "@/components/DesktopBackground";
import Launcher from "@/components/Launcher";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden min-w-screen min-h-screen relative">
      <div className="z-20 relative w-full h-full p-8 flex items-start sm:items-center justify-center overflow-y-auto">
        <DesktopBackground src="https://images.unsplash.com/photo-1528164344705-47542687000d" />
        <Launcher />
      </div>
    </div>
  );
}
