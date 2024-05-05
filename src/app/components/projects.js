import Link from "next/link"
import { ProjectCard } from "./projectCard"
const projectList = [
    {
        name: "",
        image: "",
        techStack: ["", ""],
        summary: "",
        githubLink: "",
        url: ""
    }, {
        name: "",
        image: "",
        techStack: ["", ""],
        summary: "",
        githubLink: "",
        url: ""
    }
]


export const Projects = () => {
    return (
        <div className="mt-5">
            <div className="flex justify-between mb-10">
                <div className=" text-white text-3xl font-medium mr-4">
                    <span className="text-primary">#</span>projects
                </div>
                <div className="h-[2px] w-3/5 place-self-center bg-primary"></div>
                <div className="text-white text-lg place-self-center">
                    <Link href={"/works"}>
                        View all ~~&gt;
                    </Link>

                </div>
            </div>

            <div className="md:flex justify-between">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}