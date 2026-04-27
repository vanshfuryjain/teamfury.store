
import { SITE_CONFIG } from "@/utils/config";
export default async function HeroHomePage() {
  return (
    <div className="flex  flex-col justify-between text-justify ">
      {/** Valorant Video Auto Play**/}
      <div className="relative w-full flex justify-center md:h-screen min-h-[500px]">
        <video src={"/homepageValorant.mp4"} autoPlay loop muted preload="metadata" className="inset-0 object-cover overflow-hidden w-full"/>
      </div>
    </div>
  );
}