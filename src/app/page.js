import { NavBar } from "@comp/global/navBar";
import { Hero } from "@comp/home/hero";
import { Quote } from "@comp/home/quote";
import { Projects } from "@comp/home/projects";
import { Skills } from "@comp/home/skills";
import { AboutMe } from "@comp/home/about-me";
import { Contacts } from "@comp/home/contacts";
import { Footer } from "@comp/global/footer";
export default function Home() {
  return (

    <div className="custom-bg px-[100px] relative pb-10">
      {/* <div className="absolute bottom-24 -right-1 w-[71px] h-[71px] border-2 border-gray text-white "></div> */}

      <NavBar />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      {/* <div className="mt-10 w-full h-[2px] border-2 border-gray"></div> */}
      <Footer />
    </div>

  );
}
