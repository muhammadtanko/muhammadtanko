"use client"
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaHeart } from "react-icons/fa6";
import { RiTwitterXLine, RiMailLine, RiMapPinLine } from "react-icons/ri";
import { useState, useEffect } from 'react';

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.querySelector('#footer');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        {
            name: "GitHub",
            icon: DiGithubBadge,
            href: "https://github.com/muhammadtanko",
            hoverColor: "hover:text-gray-300"
        },
        {
            name: "Twitter",
            icon: RiTwitterXLine,
            href: "https://twitter.com/teekay_014",
            hoverColor: "hover:text-blue-400"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/muhammad-yahaya-tanko-752814140/",
            hoverColor: "hover:text-blue-600"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <footer id="footer" className="relative mt-20 overflow-hidden">
            {/* Decorative line */}
            <div className={`w-full h-[2px] bg-gradient-to-r from-transparent via-[#C778DD] to-transparent mb-10 transform transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'
                }`}></div>

            {/* Main Footer Content */}
            <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand Section */}
                    <div className={`space-y-4 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="group">
                            <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-[#C778DD] transition-colors duration-300">
                                Muhammad
                            </h3>
                            <div className="w-12 h-1 bg-[#C778DD] rounded transition-all duration-300 group-hover:w-16"></div>
                        </div>

                        <p className="text-[#ABB2BF] leading-relaxed">
                            Full-stack developer passionate about creating modern, scalable web applications and contributing to open source projects.
                        </p>

                        <div className="flex items-center space-x-2 text-[#ABB2BF] hover:text-[#C778DD] transition-colors duration-300">
                            <RiMailLine className="w-4 h-4" />
                            <span className="text-sm">teekay014@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-2 text-[#ABB2BF] hover:text-[#C778DD] transition-colors duration-300">
                            <RiMapPinLine className="w-4 h-4" />
                            <span className="text-sm">Available for remote work</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <h4 className="text-white text-xl font-semibold mb-6">
                            <span className="text-[#C778DD]">#</span>quick-links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`text-[#ABB2BF] hover:text-[#C778DD] transition-all duration-300 hover:translate-x-2 inline-block transform delay-${index * 100}`}
                                    >
                                        → {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <h4 className="text-white text-xl font-semibold mb-6">
                            <span className="text-[#C778DD]">#</span>connect
                        </h4>

                        <div className="space-y-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center space-x-3 text-[#ABB2BF] ${social.hoverColor} transition-all duration-300 hover:translate-x-2 group`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">{social.name}</span>
                                        <span className="text-xs text-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            ↗
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-6 p-4 border border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-colors duration-300 group">
                            <p className="text-sm text-[#ABB2BF] mb-2">Have a project in mind?</p>
                            <Link
                                href="/contact"
                                className="text-[#C778DD] font-medium hover:text-white transition-colors duration-300 group-hover:underline"
                            >
                                Let's work together →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`border-t border-[#ABB2BF] border-opacity-30 pt-6 mt-8 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-[#ABB2BF] text-sm flex items-center space-x-2">
                            <span>© {currentYear} Muhammad Yahaya Tanko.</span>
                            <span className="hidden md:inline">Made with</span>
                            <FaHeart className="w-4 h-4 text-[#C778DD] animate-pulse" />
                            <span className="hidden md:inline">and lots of coffee</span>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-[#ABB2BF]">Available for new opportunities</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 border border-[#C778DD] opacity-10 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border border-[#ABB2BF] opacity-5 rotate-12 animate-pulse"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#282C33] via-transparent to-transparent pointer-events-none"></div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </footer>
    );
};