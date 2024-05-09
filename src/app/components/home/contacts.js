import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

export const Contacts = () => {
    return (
        <div className="mt-10">
            <div className="flex mb-4 ">
                <div className=" text-white text-3xl font-medium mr-7">
                    <span className="text-primary">#</span>contact
                </div>
                <div className="h-[3px] w-1/5 place-self-center bg-primary"></div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row justify-between">
                <div className="text-gray text-base font-medium max-w-lg ">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </div>
                <div className="border-2 border-gray flex flex-col p-2">
                    <div className="text-white font-semibold text-base mb-2 text-center">Message me here</div>
                    <div className="flex gap-2 text-gray">
                        <div className="place-self-center"><FaDiscord className="w-10" /></div>
                        <p className="">abba0752</p>
                    </div>
                    <div className="flex gap-2 text-gray">
                        <div className="place-self-center"><IoIosMail className="w-10" /></div>
                        <p className="">teekay014@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}