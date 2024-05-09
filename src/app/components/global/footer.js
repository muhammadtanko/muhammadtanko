import Link from "next/link"
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


export const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-4 md:flex-row justify-between mt-10">
                <div className="">
                    <div className="text-gray flex justify-between">
                        <p className="">Elias</p>
                        <p className=""> teekay014@gmail.com</p>
                    </div>
                    <div className="text-white">Web designer and front-end developer</div>
                </div>
                <div className="">
                    <div className="text-white text-2xl font-medium mb-3">
                        Media
                    </div>
                    <div className="flex gap-3 text-gray md:justify-center -ml-3">
                        <Link href={"https://github.com/muhammadtanko"}> <DiGithubBadge className="w-6 h-6" /></Link>
                        <Link href={"https://twitter.com/teekay_014"}> <RiTwitterXLine className="w-6 h-6" /></Link>
                        <Link href={"https://www.linkedin.com/in/muhammad-yahaya-tanko-752814140/"}> <FaLinkedin className="w-6 h-6" /></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}