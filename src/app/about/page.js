import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { About } from "@comp/about/about";
import { Skills } from "@comp/about/skills"
import { FunFacts } from "@comp/about/funFacts";

export default function AboutPage() {
    return (
        <div className="">
            <div className="bg-bg-color px-[100px]">
                <NavBar />
                <div className="text-white font-semibold text-3xl">
                    <span className="text-primary ">/</span> about-me
                </div>
                <div className="text-gray mb-10">
                    who am i?
                </div>
                <About />
                <div className="text-white font-medium text-3xl mb-10">
                    <span className="text-primary ">#</span>skills
                </div>
                <div className="flex justify-between flex-wrap">
                    <Skills />
                    <Skills />
                    <Skills />
                    <Skills />
                    <Skills />
                </div>
                <div className="text-white font-medium text-3xl mb-10">
                    <span className="text-primary ">#</span>my-fun-facts
                </div>
                <div className="">
                    <FunFacts />
                </div>
                <div className=""></div>
                <Footer />
            </div>
        </div>
    );
}
