import DesktopBackground from "@/components/DesktopBackground";
import Launcher from "@/components/Launcher";

export default function Home() {
  return (
    <div className="z-20 relative w-full h-full p-8 flex items-start sm:items-center justify-center">
      <Launcher />
    </div>
  );
}
