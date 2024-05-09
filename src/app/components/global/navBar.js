"use client";
import { RiMenu3Fill, } from "react-icons/ri"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";

const navItem = [
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
]

export const NavBar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <div className=" text-white ">
            <div className="flex justify-between px-6 
            pt-[100px] pb-4  ">
                {/* <div className="block md:hidden pt-1">
                    {open ? (
                        <div onClick={() => setOpen(false)}>
                            <AiOutlineCloseCircle />
                        </div>
                    ) : (
                        <div onClick={handleOpen}>
                            <RiMenu3Fill />
                        </div>
                    )}

                </div> */}
                <Link href="/">
                    <div className="text-primary md:text-[24px] font-[700] cursor-pointer">
                        <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
                    </div>
                </Link>
                <div className="hidden md:block lg:block"  >
                    {navItem.map((item, idx) => {
                        return (
                            <Link
                                href={item.to}
                                key={idx}
                                // className={isActive ? "mx-4 text-primary hover:text-primary " : "mx-4 text-black hover:text-primary active:text-primary"}
                                className="mx-4 text-black hover:border-b hover:border-primary active:text-primary text-lg font-medium"
                            >
                                <span className="text-primary pr-1">#</span>{item.name}
                            </Link>
                        )

                    })}
                </div>
                <div className="block md:hidden" onClick={handleOpen}>
                    <div onClick={handleOpen}>
                        <RiMenu3Fill />
                    </div>
                </div>

            </div>
            {open &&
                <div className="px-6 z-100 md:hidden min-h-screen">
                    <ul>
                        {navItem.map((item, idx) => (
                            <Link
                                href={item.to}
                                key={idx}
                                className="mx-4 font-bold"
                            >
                                <li >
                                    <span className="text-primary pr-1 pb-[32px] text-4xl font-medium">#</span>{item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>

                </div>
            }

        </div>
    )
}