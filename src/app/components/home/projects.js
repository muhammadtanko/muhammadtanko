"use client"
import Link from "next/link";
import { useState, useEffect } from 'react';

export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Alumni Management System",
            description: "A software solution for managing alumni data, events, and communications",
            image: "/images/alumni.png",
            techStack: ["REACT", "REDUX TOOLKIT", "TAILWINDCSS", "NODE.JS", "MongoDB"],
            liveLink: "https://alumni-ruby.vercel.app/",
            cachedLink: "https://github.com/muhammadtanko/alumni_frontend",
        },
        {
            id: 2,
            title: "Leen Charity Website",
            description: "A charity organization website to facilitate donations and showcase projects",
            image: "/images/leen.png",
            techStack: ["NEXT.JS","TAILWINDCSS"],
            liveLink: "https://leen-charity.vercel.app/",
            cachedLink: "https://github.com/muhammadtanko/leen_charity",
        },
        {
            id: 3,
            title: "Maternal Health organization",
            description: "A platform dedicated to improving maternal health through resources and community support",
            image: "/images/mat-in.png",
            techStack:["NEXT.JS","TAILWINDCSS"],
            liveLink: "https://www.mat-in.org/",
            cachedLink: "https://github.com/muhammadtanko/mat-in",
        },
        {
            id: 4,
            title: "Zuka Cash",
            description: "A WhatsApp-based fintech platform that lets users register and make transactions directly through chat",
            image: "/images/zuka.png",
            techStack: ["NODE.JS", "WHATSAPP API", "MongoDB"],
            liveLink: null,
            cachedLink: null,
        }
    ];

    return (
        <div className="mt-10 px-4 md:px-0">
            {/* Header Section */}
            <div className={`flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="text-white text-2xl sm:text-3xl font-medium">
                    <span className="text-[#C778DD]">#</span>projects
                </div>
                <div className="h-[2px] flex-1 mx-4 bg-[#C778DD] transform transition-all duration-1000 delay-300 scale-x-0 animate-[scaleX_1s_ease-out_0.3s_forwards]"></div>
                <Link
                    href="/projects"
                    className={`text-white text-base sm:text-lg hover:text-[#C778DD] transition-colors duration-300 transform delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                >
                    View all ~~&gt;
                </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        style={{
                            transitionDelay: `${300 * (index + 1)}ms`
                        }}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
        </div>
    );
};



export const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full border-2 border-[#ABB2BF] shadow rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:border-[#C778DD] hover:shadow-2xl hover:shadow-[#C778DD]/20 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image */}
            <div
                className="relative h-48 sm:h-60 md:h-72 lg:h-80 
             border-b-2 border-[#ABB2BF] 
             bg-contain bg-no-repeat bg-center 
             overflow-hidden 
             group-hover:border-[#C778DD] 
             transition-colors duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                {/* Overlay on hover */}
                <div
                    className={`absolute inset-0 bg-[#C778DD] transition-opacity duration-500 ${isHovered ? "opacity-20" : "opacity-0"
                        }`}
                ></div>

                {/* Live Demo Badge */}
                <div
                    className={`absolute top-4 right-4 px-3 py-1 bg-[#C778DD] text-white text-xs font-medium rounded transform transition-all duration-300 ${isHovered
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                        }`}
                >
                    LIVE
                </div>
            </div>

            {/* Tech Stack */}
            <div className="p-3 border-b-2 border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors duration-500">
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={tech}
                            className={`text-[#ABB2BF] font-normal text-xs px-2 py-1 rounded transition-all duration-300 ${isHovered
                                ? "text-white bg-[#C778DD] bg-opacity-20"
                                : "hover:text-white"
                                }`}
                            style={{
                                transitionDelay: isHovered
                                    ? `${index * 50}ms`
                                    : "0ms",
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Details */}
            <div className="p-4">
                <div
                    className={`text-white text-xl font-medium mb-3 transition-colors duration-300 ${isHovered ? "text-[#C778DD]" : ""
                        }`}
                >
                    {project.title}
                </div>
                <div className="text-base font-normal text-[#ABB2BF] mb-4 leading-relaxed">
                    {project.description}
                </div>

                {/* Action Buttons */}
                {(project.liveLink || project.cachedLink) ? (
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 border-2 border-[#C778DD] text-white font-medium transition-all duration-300 transform ${isHovered
                                    ? "bg-[#C778DD] bg-opacity-20 scale-105 shadow-lg shadow-[#C778DD]/30"
                                    : "hover:bg-[#C778DD] hover:bg-opacity-10"
                                    }`}
                            >
                                Live &lt;~~&gt;
                            </a>
                        )}
                        {project.cachedLink && (
                            <a
                                href={project.cachedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 border-2 border-[#ABB2BF] text-white font-medium transition-all duration-300 transform hover:border-[#C778DD] hover:scale-105 ${isHovered ? "border-[#C778DD]" : ""
                                    }`}
                            >
                                Code &ge;
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="text-[#ABB2BF] text-sm italic">Private project</div>
                )}
            </div>

            {/* Animated corner accent */}
            <div
                className={`absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-transparent transition-all duration-500 ${isHovered
                    ? "border-l-[#C778DD] border-t-[#C778DD] w-8 h-8"
                    : ""
                    }`}
            ></div>
        </div>
    );
};