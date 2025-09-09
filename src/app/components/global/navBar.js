"use client";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    {
        name: "home",
        to: "/",
    },
    {
        name: "projects",
        to: "/projects",
    },
    {
        name: "about-me",
        to: "/about",
    },
    {
        name: "contacts",
        to: "/contact"
    }
];

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initial animation
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActivePage = (path) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            {/* Main Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-[#282C33] bg-opacity-95 backdrop-blur-md shadow-lg shadow-[#C778DD]/10'
                : 'bg-transparent'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 md:py-6">
                        {/* Logo */}
                        <Link href="/" className="group">
                            <div className="relative">
                                <Image
                                    src="/images/my_logo.png"
                                    width={80}
                                    height={80}
                                    alt="Muhammad's Logo"
                                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 bg-primary rounded-full"
                                />
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-[#C778DD] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-xl"></div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, idx) => (
                                <Link
                                    href={item.to}
                                    key={idx}
                                    className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group ${isActivePage(item.to)
                                        ? 'text-[#C778DD]'
                                        : 'text-white hover:text-[#C778DD]'
                                        }`}
                                >
                                    <span className="text-[#C778DD] pr-1">#</span>
                                    <span className="relative">
                                        {item.name}
                                        {/* Animated underline */}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C778DD] transition-all duration-300 ${isActivePage(item.to)
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </span>

                                    {/* Hover background effect */}
                                    <div className="absolute inset-0 bg-[#C778DD] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md -z-10"></div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-white hover:text-[#C778DD] transition-colors duration-300 relative z-50"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    {isOpen ? (
                                        <RiCloseLine className="w-6 h-6" />
                                    ) : (
                                        <RiMenu3Fill className="w-6 h-6" />
                                    )}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
                }`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={toggleMenu}
                ></div>

                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#282C33] transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } border-l-2 border-[#C778DD] shadow-2xl`}>

                    {/* Menu Header */}
                    <div className="pt-20 pb-8 px-6 border-b border-[#ABB2BF] border-opacity-30">
                        <h2 className="text-2xl font-bold text-white">
                            <span className="text-[#C778DD]">Navigation</span>
                        </h2>
                    </div>

                    {/* Menu Items */}
                    <nav className="px-6 py-8">
                        <ul className="space-y-6">
                            {navItems.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`transform transition-all duration-500 ${isOpen
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: isOpen ? `${idx * 100}ms` : '0ms'
                                    }}
                                >
                                    <Link
                                        href={item.to}
                                        className={`block group py-3 px-4 rounded-lg transition-all duration-300 ${isActivePage(item.to)
                                            ? 'text-[#C778DD] bg-[#C778DD] bg-opacity-10 border-l-4 border-[#C778DD]'
                                            : 'text-white hover:text-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-10 border-l-4 border-transparent hover:border-[#C778DD]'
                                            }`}
                                    >
                                        <span className="text-2xl font-medium flex items-center">
                                            <span className="text-[#C778DD] mr-2">#</span>
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                                                {item.name}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Menu Footer */}
                    <div className="absolute bottom-8 left-6 right-6">
                        <div className="text-center">
                            <p className="text-[#ABB2BF] text-sm">
                                Made with <span className="text-[#C778DD] animate-pulse">♥</span> by Muhammad
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed navbar */}
            <div className="h-20 md:h-24"></div>
        </>
    );
};