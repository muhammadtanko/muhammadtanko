import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { ProjectCard } from "@comp/global/projectCard"
import { SmallProjectCard } from "@comp/projects/smallProjectCard";


export default function Projects() {
    return (
        <div className="bg-bg-color px-[100px]">
            <NavBar />
            <div className="text-white font-semibold text-3xl">
                <span className="text-primary ">/</span> projects
            </div>
            <div className="text-gray mb-10">
                List of my projects
            </div>
            <div className="text-white font-medium text-3xl mb-10">
                <span className="text-primary ">#</span>complete-apps
            </div>
            <div className="flex flex-col md:flex-row justify-between flex-wrap gap-5 mb-20">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="text-white font-medium text-3xl mb-10">
                <span className="text-primary ">#</span>small-projects
            </div>
            <div className="flex justify-between flex-wrap gap-5 mb-10">
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
            </div>
            <Footer />
        </div>
    );
}
