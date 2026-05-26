import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import TipsHack from "@/components/TipsHack";
import TopInstructor from "@/components/TopInstructor";
import tipsData from "../../public/tips.json";


export default function Home() {
  return (
    <div >
      <Banner/>
      <PopularCourses/>
      <TipsHack data={tipsData}/>
      <TopInstructor/>
    </div>
  );
}
