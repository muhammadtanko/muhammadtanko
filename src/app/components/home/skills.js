"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "SQLite"]
        },
        {
            title: "Tools",
            skills: ["VSCode", "Linux", "Docker", "Prisma"]
        },
        {
            title: "Frameworks",
            skills: ["React", "Next.js", "Node.js", "Express"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Vercel", "GitHub Actions"]
        }
    ];

    return (
        <div className="flex flex-col mt-10 px-4 md:px-0">
            {/* Header Section */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-24 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="text-white text-2xl sm:text-3xl font-medium">
                    <span className="text-[#C778DD]">#</span>skills
                </div>
                <div className="h-[2px] w-full sm:w-1/5 self-center bg-[#C778DD] transform transition-all duration-1000 delay-300 scale-x-0 animate-[scaleX_1s_ease-out_0.3s_forwards]">
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Decorative Images Section */}
                <div className={`relative hidden lg:block transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                    <div className="relative h-96">
                        <Image
                            className="absolute top-7 animate-float"
                            src={"/images/skills-dots.png"}
                            height={63}
                            width={63}
                            alt="Decorative dots"
                        />
                        <Image
                            className="absolute top-48 animate-float-delayed"
                            src={"/images/skills-logo.png"}
                            height={113}
                            width={113}
                            alt="Skills logo"
                        />
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`group transform transition-all duration-700 delay-${100 * (index + 1)} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{
                                transitionDelay: `${100 * (index + 1)}ms`
                            }}
                        >
                            <SkillCard
                                title={category.title}
                                skills={category.skills}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 3s ease-in-out infinite 1.5s;
                }
            `}</style>
        </div>
    );
};

const SkillCard = ({ title, skills }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className={`p-3 text-white border-2 border-[#ABB2BF] font-semibold text-base text-left transition-all duration-300 ${isHovered ? 'border-[#C778DD] bg-[#C778DD] bg-opacity-10' : ''
                }`}>
                {title}
            </div>

            {/* Skills Container */}
            <div className={`p-3 border-2 border-[#ABB2BF] border-t-0 transition-all duration-300 ${isHovered ? 'border-[#C778DD] shadow-lg shadow-[#C778DD]/20' : ''
                }`}>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={skill}
                            className={`text-[#ABB2BF] text-sm px-2 py-1 rounded transition-all duration-300 delay-${index * 50} transform ${isHovered
                                ? 'text-white bg-[#C778DD] bg-opacity-20 scale-105'
                                : 'hover:text-white'
                                }`}
                            style={{
                                transitionDelay: isHovered ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};