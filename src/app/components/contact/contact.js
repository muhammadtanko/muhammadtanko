"use client"
import { IoIosMail } from "react-icons/io";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";
import { useState, useEffect } from 'react';

export const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const contactMethods = [
        {
            icon: FaDiscord,
            title: "Discord",
            value: "abba0752",
            description: "Best for quick chats",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500"
        },
        {
            icon: IoIosMail,
            title: "Email",
            value: "teekay014@gmail.com",
            description: "For professional inquiries",
            color: "text-red-400",
            bgColor: "bg-red-500"
        },
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            value: "+234 8020763993",
            description: "For urgent matters",
            color: "text-green-400",
            bgColor: "bg-green-500"
        }
    ];

    return (
        <div className="mt-10 px-4 md:px-0">
            {/* Header */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="text-white text-2xl sm:text-3xl font-medium">
                    <span className="text-[#C778DD]">#</span>contact
                </div>
                <div className="h-[2px] flex-1 bg-[#C778DD] transform transition-all duration-1000 delay-300 scale-x-0 animate-[scaleX_1s_ease-out_0.3s_forwards]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Information */}
                <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>

                    {/* Intro Text */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-semibold">
                            Let's work together!
                        </h3>
                        <p className="text-[#ABB2BF] text-base leading-relaxed">
                            I'm interested in freelance opportunities, exciting projects, and collaboration.
                            However, if you have any other requests or questions, don't hesitate to contact me using any of the methods below.
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-4">
                        {contactMethods.map((method, index) => {
                            const IconComponent = method.icon;
                            return (
                                <div
                                    key={method.title}
                                    className={`group p-4 border-2 border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-all duration-300 hover:shadow-lg hover:shadow-[#C778DD]/20 cursor-pointer transform hover:-translate-y-1 delay-${index * 100}`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 ${method.bgColor} bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all duration-300`}>
                                            <IconComponent className={`w-5 h-5 ${method.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-medium group-hover:text-[#C778DD] transition-colors duration-300">
                                                {method.title}
                                            </h4>
                                            <p className="text-[#ABB2BF] text-sm font-mono">
                                                {method.value}
                                            </p>
                                            <p className="text-[#ABB2BF] text-xs mt-1">
                                                {method.description}
                                            </p>
                                        </div>
                                        <div className="text-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Quick Response Promise */}
                    <div className="p-4 bg-[#C778DD] bg-opacity-10 border border-[#C778DD] rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-[#C778DD] rounded-full animate-pulse"></div>
                            <span className="text-[#C778DD] font-semibold text-sm">Quick Response Guaranteed</span>
                        </div>
                        <p className="text-[#ABB2BF] text-sm">
                            I typically respond within 24 hours. For urgent matters, Discord or WhatsApp are your best bet!
                        </p>
                    </div>
                </div>

                {/* Availability and Call to Action */}
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                    <div className="space-y-6">

                        {/* Action Header */}
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-semibold mb-2">
                                Ready to start a conversation?
                            </h3>
                            <p className="text-[#ABB2BF] text-sm">
                                Choose your preferred method from the contact options on the left to get in touch with me.
                            </p>
                        </div>

                        {/* Availability Status */}
                        <div className="p-6 bg-[#C778DD] bg-opacity-10 border border-[#C778DD] rounded-lg">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-[#C778DD] font-semibold">Currently Available</span>
                            </div>
                            <p className="text-[#ABB2BF] text-sm mb-3">
                                I'm actively looking for new opportunities and exciting projects to work on.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-white font-medium">Response Time:</span>
                                    <p className="text-[#ABB2BF]">Within 24 hours</p>
                                </div>
                                <div>
                                    <span className="text-white font-medium">Time Zone:</span>
                                    <p className="text-[#ABB2BF]">WAT (UTC+1)</p>
                                </div>
                            </div>
                        </div>

                        {/* Project Types */}
                        <div className="p-6 border border-[#ABB2BF] rounded-lg">
                            <h4 className="text-white font-medium mb-4">What I can help you with:</h4>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#C778DD] rounded-full"></div>
                                    <span className="text-[#ABB2BF] text-sm">Web Development & Design</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#C778DD] rounded-full"></div>
                                    <span className="text-[#ABB2BF] text-sm">Frontend & Backend Solutions</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#C778DD] rounded-full"></div>
                                    <span className="text-[#ABB2BF] text-sm">Project Consultation</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-[#C778DD] rounded-full"></div>
                                    <span className="text-[#ABB2BF] text-sm">Technical Problem Solving</span>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center p-6 border-2 border-dashed border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-colors duration-300">
                            <h4 className="text-white font-medium mb-2">
                                Let's build something amazing together!
                            </h4>
                            <p className="text-[#ABB2BF] text-sm">
                                Whether it's a simple website or a complex web application, I'm here to help bring your ideas to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};