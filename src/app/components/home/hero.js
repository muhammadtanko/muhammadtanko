"use client"
import Link from "next/link";
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = "Muhammad is a Full stack developer and an open source enthusiast";

    useEffect(() => {
        setIsVisible(true);

        // Typewriter effect
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex md:flex-row flex-col justify-between text-[#ABB2BF] mt-4 pb-6 min-h-[70vh] relative overflow-hidden">
            {/* Social Media Sidebar */}
            <div className="hidden md:flex justify-center items-center flex-col gap-8 fixed top-1/2 left-5 transform -translate-y-1/2 z-10">
                <div className={`h-[120px] w-[2px] bg-[#ABB2BF] transition-all duration-1000 delay-300 ${isVisible ? 'scale-y-100' : 'scale-y-0'
                    }`}></div>
                <div className="flex flex-col justify-center items-center gap-6">
                    {[
                        { icon: DiGithubBadge, href: "https://github.com/muhammadtanko", delay: "delay-500" },
                        { icon: RiTwitterXLine, href: "https://twitter.com/teekay_014", delay: "delay-700" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-yahaya-tanko-752814140/", delay: "delay-900" }
                    ].map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <Link
                                key={index}
                                href={social.href}
                                className={`transform transition-all duration-700 hover:scale-125 hover:text-[#C778DD] ${social.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                            >
                                <IconComponent className="w-6 h-6" />
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col z-10 md:ml-16">
                <div className={`text-white font-semibold text-3xl md:text-4xl lg:text-5xl pb-6 md:pb-8 max-w-[400px] md:max-w-[700px] mt-[60px] leading-tight transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <span className="inline-block">
                        {typedText.split(' ').map((word, index) => (
                            <span key={index} className="inline-block mr-2">
                                {word === 'Full' || word === 'stack' ? (
                                    <span className="text-[#C778DD]">{word}</span>
                                ) : word === 'open' || word === 'source' || word === 'enthusiast' ? (
                                    <span className="text-[#C778DD]">{word}</span>
                                ) : (
                                    word
                                )}
                            </span>
                        ))}
                        <span className="animate-pulse">|</span>
                    </span>
                </div>

                <div className={`pb-6 max-w-[650px] text-base md:text-lg leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    He crafts responsive websites and scalable systems where technologies meet creativity
                </div>

                <div className={`hidden md:flex gap-4 transform delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <Link
                        href="/contact"
                        className="text-center border-[#C778DD] border-2 p-3 px-6 w-fit text-white font-medium transition-all duration-300 hover:bg-[#C778DD] hover:bg-opacity-20 hover:scale-105 hover:shadow-lg hover:shadow-[#C778DD]/30"
                    >
                        Contact me!!
                    </Link>
                    <a
                        href="/Muhammad_tanko_.pdf"
                        download
                        className="text-center border-[#ABB2BF] border-2 p-3 px-6 w-fit text-white font-medium transition-all duration-300 hover:border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-10 hover:scale-105"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className={`relative mt-8 md:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}>
                <div className="relative">
                    {/* Floating Logo */}
                    <Image
                        className="absolute top-20 animate-float z-10"
                        src="/images/logo-design.png"
                        height={155}
                        width={155}
                        alt="Logo design"
                    />

                    {/* Main Hero Image */}
                    <div className="relative group">
                        <Image
                            className="transition-transform duration-500 group-hover:scale-105"
                            src="/images/01M-cropped.png"
                            width={400}
                            height={400}
                            alt="Muhammad's photo"
                        />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-[#C778DD] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                    </div>

                    {/* Floating Dots */}
                    <Image
                        className="absolute right-0 bottom-[70px] animate-float-delayed"
                        src="/images/dots.png"
                        width={84}
                        height={84}
                        alt="Decorative dots"
                    />
                </div>

                {/* Status Card */}
                <div className={`flex gap-3 p-3 border-2 border-[#ABB2BF] mt-4 bg-[#282C33] transform transition-all duration-700 delay-1000 hover:border-[#C778DD] hover:shadow-lg hover:shadow-[#C778DD]/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="w-4 h-4 bg-[#C778DD] mt-1.5 animate-pulse"></div>
                    <div className="text-[#ABB2BF]">Currently working on Portfolio</div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#ABB2BF] opacity-10 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#C778DD] opacity-20 animate-pulse"></div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(-3deg); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 6s ease-in-out infinite 2s;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};