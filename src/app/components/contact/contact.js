
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="text-gray font-normal text-base ">

                <div className="mb-6 max-w-lg">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </div>

            </div>
            <div className="border-2 border-gray flex flex-col justify-center p-3">
                <div className="text-white font-semibold text-base mb-2 text-center">Message me here</div>
                <div className="flex gap-2 text-gray">
                    <div className="place-self-center"><FaDiscord className="" /></div>
                    <p className="">abba0752</p>
                </div>
                <div className="flex gap-2 text-gray">
                    <div className="place-self-center"><IoIosMail className="" /></div>
                    <p className="">teekay014@gmail.com</p>
                </div>
            </div>
        </div>
    )
}