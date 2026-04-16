
import { SITE_CONFIG } from "@/utils/config";
export default async function HeroHomePage() {
  return (
    <div className="flex  flex-col justify-between text-justify ">
      {/** Valorant Video Auto Play**/}
      <div className="relative w-full flex justify-center md:h-screen min-h-[500px]">
        <video src={"/homepageValorant.mp4"} autoPlay loop muted preload="metadata" className="inset-0 object-cover overflow-hidden w-full"/>
        <div className="hidden w-full md:flex absolute top-60 left-1/2 -translate-x-1/2 z-10 flex-col items-center bg-black/80 p-6">
            <span className="text-red-500 font-extrabold text-4xl tracking-widest uppercase">
                {SITE_CONFIG.name}
            </span>
        </div>
      </div>
    </div>
  );
}