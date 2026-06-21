"use client"
import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { useState, useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: "Alumni Management System",
        description: "A software solution for managing alumni data, events, and communications",
        image: "/images/alumni.png",
        techStack: ["REACT", "REDUX TOOLKIT", "TAILWINDCSS", "NODE.JS", "MongoDB"],
        liveLink: "https://alumni-ruby.vercel.app/",
        code: "https://github.com/muhammadtanko/alumni_frontend",
    },
    {
        id: 2,
        title: "Leen Charity Website",
        description: "A charity organization website to facilitate donations and showcase projects",
        image: "/images/leen.png",
        techStack: ["NEXT.JS", "TAILWINDCSS"],
        liveLink: "https://leen-charity.vercel.app/",
        code: "https://github.com/muhammadtanko/leen_charity",
    },
    {
        id: 3,
        title: "Maternal Health organization",
        description: "A platform dedicated to improving maternal health through resources and community support",
        image: "/images/mat-in.png",
        techStack: ["NEXT.JS", "TAILWINDCSS"],
        liveLink: "https://www.mat-in.org/",
        code: "https://github.com/muhammadtanko/mat-in",
    },
    {
        id: 4,
        title: "Kaduna State Contributory health Management Authority",
        description: "A health management platform for Kaduna State, providing information and services related to healthcare contributions",
        image: "/images/kadchma.png",
        techStack: ["React", "tailwindcss"],
        liveLink: "https://kadchma-one.vercel.app/",
        code: "https://github.com/muhammadtanko/project4",
    },
    {
        id: 5,
        title: "Al-ihsan website",
        description: "",
        image: "/images/al-ihsan.png",
        techStack: ["REACT", "TAILWINDCSS"],
        liveLink: "https://al-ihsan-two.vercel.app/",
        code: "http://github.com/muhammadtanko/al-ihsan"
    },
    {
        id: 6,
        title: "Zuka Cash",
        description: "A WhatsApp-based fintech platform that lets users register and make transactions directly through chat",
        image: "/images/zuka.png",
        techStack: ["NODE.JS", "WHATSAPP API", "MongoDB"],
        liveLink: "https://zuka-solutions.com/",
        code: null
    }
];

const smallProjects = [
    {
        id: 1,
        title: "Weather Telegram Bot",
        explanation: "A lightweight Telegram bot that gives users instant weather updates without leaving the chat. Type a city name and the bot fetches live conditions from a weather API and replies with the temperature, conditions, and a short forecast.",
        techStack: ["NODE.JS", "TELEGRAM BOT API", "OpenWeather API"],
        code: null
    }
];

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#282C33] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <NavBar />

                {/* Page Header */}
                <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-white font-semibold text-3xl lg:text-4xl">
                            <span className="text-[#C778DD]">/</span> projects
                        </h1>
                        <div className="h-[2px] flex-1 max-w-xs bg-[#C778DD] transform transition-all duration-1000 delay-300 scale-x-0 animate-[scaleX_1s_ease-out_0.3s_forwards]"></div>
                    </div>
                    <p className="text-[#ABB2BF] text-lg">
                        List of my projects
                    </p>
                </div>

                {/* Complete Apps Section */}
                <section className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-white font-medium text-3xl">
                            <span className="text-[#C778DD]">#</span>complete-apps
                        </h2>
                        <div className="h-[2px] w-32 bg-[#C778DD] transform transition-all duration-1000 delay-500 scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${600 + (index * 150)}ms`
                                }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Small Projects Section */}
                <section className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-white font-medium text-3xl">
                            <span className="text-[#C778DD]">#</span>small-projects
                        </h2>
                        <div className="h-[2px] w-32 bg-[#C778DD] transform transition-all duration-1000 delay-700 scale-x-0 animate-[scaleX_1s_ease-out_0.7s_forwards]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {smallProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${800 + (index * 150)}ms`
                                }}
                            >
                                <SmallProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>

            <style jsx>{`
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
        </div>
    );
}

// Enhanced ProjectCard Component
export const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full border-2 border-[#ABB2BF] shadow rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:border-[#C778DD] hover:shadow-2xl hover:shadow-[#C778DD]/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image */}
            <div className="relative h-48 border-b-2 border-[#ABB2BF] bg-contain bg-no-repeat bg-center overflow-hidden group-hover:border-[#C778DD] transition-colors duration-500"
                style={{ backgroundImage: `url(${project.image})` }}>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-[#C778DD] transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'
                    }`}></div>

                {/* Live Demo Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 bg-[#C778DD] text-white text-xs font-medium rounded transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                    }`}>
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
                                ? 'text-white bg-[#C778DD] bg-opacity-20'
                                : 'hover:text-white'
                                }`}
                            style={{
                                transitionDelay: isHovered ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Details */}
            <div className="p-4">
                <h3 className={`text-white text-xl font-medium mb-3 transition-colors duration-300 ${isHovered ? 'text-[#C778DD]' : ''
                    }`}>
                    {project.title}
                </h3>
                <p className="text-base font-normal text-[#ABB2BF] mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Action Buttons */}
                {(project.liveLink || project.code) ? (
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 border-2 border-[#C778DD] text-white font-medium transition-all duration-300 transform hover:scale-105 ${isHovered
                                    ? 'bg-[#C778DD] bg-opacity-20 shadow-lg shadow-[#C778DD]/30'
                                    : 'hover:bg-[#C778DD] hover:bg-opacity-10'
                                    }`}>
                                Live &lt;~~&gt;
                            </a>
                        )}
                        {project.code && (
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 border-2 border-[#ABB2BF] text-white font-medium transition-all duration-300 transform hover:border-[#C778DD] hover:scale-105 ${isHovered ? 'border-[#C778DD]' : ''
                                }`}>
                                Code &ge;
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="text-[#ABB2BF] text-sm italic">Private project</div>
                )}
            </div>

            {/* Corner accent */}
            <div className={`absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-transparent transition-all duration-500 ${isHovered ? 'border-l-[#C778DD] border-t-[#C778DD] w-8 h-8' : ''
                }`}></div>
        </div>
    );
};

// SmallProjectCard Component (includes a short explanation, not just a description)
export const SmallProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full h-full border-2 border-[#ABB2BF] shadow rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-[#C778DD] hover:shadow-lg hover:shadow-[#C778DD]/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-4">
                <h3 className={`text-white text-lg font-medium mb-2 transition-colors duration-300 ${isHovered ? 'text-[#C778DD]' : ''
                    }`}>
                    {project.title}
                </h3>
                <p className="text-sm font-normal text-[#ABB2BF] mb-4 leading-relaxed">
                    {project.explanation}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-[#ABB2BF] font-normal text-xs px-2 py-1 rounded border border-[#ABB2BF] border-opacity-30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.code ? (
                    <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-4 py-2 border-2 border-[#ABB2BF] text-white font-medium transition-all duration-300 transform hover:border-[#C778DD] hover:scale-105 ${isHovered ? 'border-[#C778DD]' : ''
                            }`}>
                        Code &ge;
                    </a>
                ) : (
                    <div className="text-[#ABB2BF] text-sm italic">Private project</div>
                )}
            </div>
        </div>
    );
};