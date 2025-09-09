"use client"
import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { useState, useEffect } from 'react';

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
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${600 + (index * 150)}ms`
                                }}
                            >
                                <ProjectCard />
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
                        {[...Array(7)].map((_, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${800 + (index * 100)}ms`
                                }}
                            >
                                <SmallProjectCard />
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
export const ProjectCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const techStack = ["REACT", "REDUX", "TAILWINDCSS", "NODE.JS", "MongoDB"];

    return (
        <div
            className="w-full border-2 border-[#ABB2BF] shadow rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:border-[#C778DD] hover:shadow-2xl hover:shadow-[#C778DD]/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image */}
            <div className="relative h-48 border-b-2 border-[#ABB2BF] bg-cover bg-center overflow-hidden group-hover:border-[#C778DD] transition-colors duration-500"
                style={{ backgroundImage: 'url("/images/banner.jpg")' }}>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-[#C778DD] transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'
                    }`}></div>

                {/* Live Demo Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 bg-[#C778DD] text-white text-xs font-medium rounded transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                    }`}>
                    FEATURED
                </div>

                {/* Hover Actions */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}>
                    <div className="p-3 bg-[#C778DD] text-white rounded-full hover:bg-[#b060d0] transition-colors duration-300 cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    <div className="p-3 bg-[#ABB2BF] text-[#282C33] rounded-full hover:bg-white transition-colors duration-300 cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="p-3 border-b-2 border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors duration-500">
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
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
                    ChertNodes
                </h3>
                <p className="text-base font-normal text-[#ABB2BF] mb-4 leading-relaxed">
                    Minecraft servers hosting platform with advanced management features and real-time monitoring
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button className={`px-4 py-2 border-2 border-[#C778DD] text-white font-medium transition-all duration-300 transform hover:scale-105 ${isHovered
                        ? 'bg-[#C778DD] bg-opacity-20 shadow-lg shadow-[#C778DD]/30'
                        : 'hover:bg-[#C778DD] hover:bg-opacity-10'
                        }`}>
                        Live &lt;~~&gt;
                    </button>
                    <button className={`px-4 py-2 border-2 border-[#ABB2BF] text-white font-medium transition-all duration-300 transform hover:border-[#C778DD] hover:scale-105 ${isHovered ? 'border-[#C778DD]' : ''
                        }`}>
                        Code &ge;
                    </button>
                </div>
            </div>

            {/* Corner accent */}
            <div className={`absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-transparent transition-all duration-500 ${isHovered ? 'border-l-[#C778DD] border-t-[#C778DD] w-8 h-8' : ''
                }`}></div>
        </div>
    );
};

// Enhanced SmallProjectCard Component
export const SmallProjectCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const techStack = ["REACT", "REDUX", "TAILWINDCSS", "NODE.JS", "MongoDB"];

    return (
        <div
            className="w-full border-2 border-[#ABB2BF] shadow rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:border-[#C778DD] hover:shadow-lg hover:shadow-[#C778DD]/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header with Icon */}
            <div className="p-4 border-b-2 border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors duration-300">
                <div className="flex items-center justify-between">
                    <div className={`p-2 border border-[#ABB2BF] rounded group-hover:border-[#C778DD] transition-colors duration-300 ${isHovered ? 'bg-[#C778DD] bg-opacity-10' : ''
                        }`}>
                        <svg className="w-5 h-5 text-[#C778DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <div className={`p-2 text-[#ABB2BF] group-hover:text-[#C778DD] transition-all duration-300 cursor-pointer ${isHovered ? 'scale-110' : ''
                        }`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Technologies */}
            <div className="p-3 border-b-2 border-[#ABB2BF] group-hover:border-[#C778DD] transition-colors duration-500">
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
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
                <h3 className={`text-white text-lg font-medium mb-2 transition-colors duration-300 ${isHovered ? 'text-[#C778DD]' : ''
                    }`}>
                    ChertNodes
                </h3>
                <p className="text-base font-normal text-[#ABB2BF] mb-4 leading-relaxed">
                    Minecraft servers hosting utility tool
                </p>

                {/* GitHub Button */}
                <button className={`w-full px-4 py-2 border-2 border-[#ABB2BF] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${isHovered ? 'border-[#C778DD] bg-[#C778DD] bg-opacity-10' : 'hover:border-[#C778DD]'
                    }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Github &lt;~~&gt;</span>
                </button>
            </div>
        </div>
    );
};