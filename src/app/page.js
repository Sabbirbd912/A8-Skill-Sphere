import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import TipsHack from "@/components/TipsHack";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://a8-skill-sphere.vercel.app/tips.json", { cache: "no-store" });
  const tipsData=await res.json();
  return (
    <div >
      <Banner/>
      <PopularCourses/>
      <TipsHack data={tipsData}/>
    </div>
  );
}
