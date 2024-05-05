import { NavBar } from "@comp/navBar";
import { Hero } from "@comp/hero";
import { Quote } from "@comp/quote";
import { Projects } from "@comp/projects";
export default function Home() {
  return (

    <div className="custom-bg px-[100px] relative pb-10">
      <div className="absolute bottom-24 -right-1 w-[71px] h-[71px] border-2 border-gray text-white "></div>

      <NavBar />
      <Hero />
      <Quote />
      <Projects />
    </div>

  );
}
