"use client"
import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaCode, FaCoffee, FaGamepad, FaMusic, FaCamera, FaBook, FaDatabase } from 'react-icons/fa';
import { RiComputerLine, RiRocket2Line, RiCloudLine } from 'react-icons/ri';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#282C33] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <NavBar />

                {/* Page Header */}
                <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-white font-semibold text-3xl lg:text-4xl">
                            <span className="text-[#C778DD]">/</span> about-me
                        </h1>
                        <div className="h-[2px] flex-1 bg-[#C778DD] transform transition-all duration-1000 delay-300 scale-x-0 animate-[scaleX_1s_ease-out_0.3s_forwards]"></div>
                    </div>
                    <p className="text-[#ABB2BF] text-lg">
                        Learn more about my journey, skills, and what makes me tick
                    </p>
                </div>

                {/* About Section */}
                <AboutSection isVisible={isVisible} />

                {/* Skills Section */}
                <SkillsSection isVisible={isVisible} />

                {/* Fun Facts Section */}
                <FunFactsSection isVisible={isVisible} />

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

const AboutSection = ({ isVisible }) => {
    return (
        <section className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-white text-2xl font-semibold mb-6">
                        <span className="text-[#C778DD]">#</span>about-me
                    </h2>

                    <div className="space-y-4 text-[#ABB2BF] leading-relaxed">
                        <p>
                            Hello there! I'm <span className="text-[#C778DD] font-medium">Muhammad</span>,
                            a passionate full-stack developer based in Nigeria. My journey into the world
                            of programming started with curiosity and has evolved into a deep love for
                            creating digital solutions that make a difference.
                        </p>

                        <p>
                            I specialize in building modern, responsive websites and web applications
                            using cutting-edge technologies. From conceptualization to deployment,
                            I enjoy every aspect of the development process.
                        </p>

                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or sharing knowledge with the developer community.
                            I believe in continuous learning and staying updated with the latest trends
                            in web development.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        {[
                            { number: "8+", label: "Projects Completed" },
                            { number: "4+", label: "Years Experience" },
                            // { number: "15+", label: "Technologies Mastered" },
                            // { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 border border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-colors duration-300">
                                <div className="text-[#C778DD] text-2xl font-bold">{stat.number}</div>
                                <div className="text-[#ABB2BF] text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <div className="relative group">
                        <Image
                            src="/images/04P.png"
                            width={400}
                            height={500}
                            alt="Muhammad working"
                            className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-[#C778DD] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C778DD] opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#ABB2BF] opacity-20 rotate-45"></div>
                </div>
            </div>
        </section>
    );
};

const SkillsSection = ({ isVisible }) => {
    const skillCategories = [
        {
            title: "Languages",
            icon: FaCode,
            skills: ["JavaScript", "TypeScript"],
            color: "text-yellow-400"
        },
        {
            title: "Frontend & Mobile",
            icon: RiComputerLine,
            skills: ["React", "Next.js", "Tailwind CSS"],
            color: "text-blue-400"
        },
        {
            title: "Backend",
            icon: RiRocket2Line,
            skills: ["Node.js", "Express", "GraphQL", "Prisma"],
            color: "text-green-400"
        },
        {
            title: "Databases",
            icon: FaDatabase,
            skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis"],
            color: "text-orange-400"
        },
        {
            title: "Cloud & DevOps",
            icon: RiCloudLine,
            skills: ["AWS", "Vercel", "GitHub Actions", "Docker", "Linux", "Git"],
            color: "text-purple-400"
        }
    ];

    return (
        <section className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-medium text-3xl">
                    <span className="text-[#C778DD]">#</span>skills
                </h2>
                <div className="h-[2px] w-32 bg-[#C778DD]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            icon={IconComponent}
                            skills={category.skills}
                            color={category.color}
                            delay={index * 100}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const SkillCard = ({ title, icon: IconComponent, skills, color, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group cursor-pointer transform transition-all duration-700 hover:-translate-y-2"
            style={{ transitionDelay: `${delay}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className={`p-4 border-2 border-[#ABB2BF] font-semibold text-base text-left transition-all duration-300 flex items-center gap-3 ${isHovered ? 'border-[#C778DD] bg-[#C778DD] bg-opacity-10' : ''
                }`}>
                <IconComponent className={`w-5 h-5 ${color}`} />
                <span className="text-white">{title}</span>
            </div>

            {/* Skills */}
            <div className={`p-4 border-2 border-[#ABB2BF] border-t-0 transition-all duration-300 ${isHovered ? 'border-[#C778DD] shadow-lg shadow-[#C778DD]/20' : ''
                }`}>
                <div className="space-y-2">
                    {skills.map((skill, index) => (
                        <div
                            key={skill}
                            className={`text-[#ABB2BF] text-sm py-1 transition-all duration-300 ${isHovered ? 'text-white transform translate-x-2' : ''
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            • {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FunFactsSection = ({ isVisible }) => {
    const funFacts = [
       
        {
            icon: FaBook,
            title: "Bookworm",
            description: "Reading has been my escape for a while now",
            color: "text-blue-400"
        },
        // {
        //     icon: FaCamera,
        //     title: "Photography",
        //     description: "I love capturing beautiful moments and landscapes",
        //     color: "text-purple-400"
        // },
        // {
        //     icon: FaCode,
        //     title: "Open Source",
        //     description: "Contributing to 20+ open source projects",
        //     color: "text-red-400"
        // }
    ];

    return (
        <section className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-medium text-3xl">
                    <span className="text-[#C778DD]">#</span>fun-facts
                </h2>
                <div className="h-[2px] w-32 bg-[#C778DD]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {funFacts.map((fact, index) => {
                    const IconComponent = fact.icon;
                    return (
                        <div
                            key={fact.title}
                            className="group p-6 border-2 border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-all duration-300 hover:shadow-lg hover:shadow-[#C778DD]/20 cursor-pointer transform hover:-translate-y-1"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`p-3 bg-[#282C33] border border-[#ABB2BF] rounded-lg group-hover:border-[#C778DD] transition-colors duration-300`}>
                                    <IconComponent className={`w-6 h-6 ${fact.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-medium text-lg mb-2 group-hover:text-[#C778DD] transition-colors duration-300">
                                        {fact.title}
                                    </h3>
                                    <p className="text-[#ABB2BF] text-sm leading-relaxed">
                                        {fact.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};