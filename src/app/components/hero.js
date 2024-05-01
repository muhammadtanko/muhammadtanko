import Link from "next/link"
import Image from "next/image"
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

export const Hero = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between text-gray mt-4 pb-6">
            <div className="flex flex-col">
                <div className="text-white font-semibold text-4xl pb-[25px] md:pb-[32px] max-w-[400px] md:max-w-[700px] mt-[60px]">
                    Muhammad is a <span className="text-primary">Full stack</span> developer and an <span className="text-primary">open source enthusiast</span>
                </div>
                <div className="pb-[25px] max-w-[650px]">
                    He crafts responsive websites and scalable systems where technologies meet creativity
                </div>
                <Link href={"/contact"}
                    className="hidden md:block text-center border-primary border-2 p-2.5 w-[140px] text-white"
                >
                    Contact me!!
                </Link>
            </div>
            <div className="relative">
                <Image className="absolute top-20" src={"/images/logo-design.png"} height={155} width={155} />
                <Image className="" src={"/images/hero-img.png"} width={400} height={400} />
                <Image className="absolute right-0 bottom-[70px]" src={"/images/dots.png"} width={84} height={84} />
                <div className="flex gap-2 p-2 border-2 border-gray">
                    <div className="w-4 h-4 bg-primary mt-1.5"></div>
                    <div className="">Currently working on Portfolio</div>
                </div>
            </div>
            {/* <div className="hidden md:flex justify-center  flex-col gap-8 absolute top-0 left-5 ">
                <div className="h-[120px] w-[2px] bg-gray"></div>
                <RiTwitterXLine />
                <FaLinkedin/>
                <DiGithubBadge/>
            </div> */}
            <div class="hidden md:flex justify-center items-center flex-col gap-8 absolute top-0 left-5">
                <div class="h-[120px] w-[2px] bg-gray"></div>
                <div class="flex flex-col justify-center items-center gap-8">
                    <Link  href={"https://github.com/muhammadtanko"}> <DiGithubBadge className="w-6 h-6"/></Link>
                    <Link  href={"https://twitter.com/teekay_014"}> <RiTwitterXLine className="w-6 h-6"/></Link>
                    <Link  href={"https://www.linkedin.com/in/muhammad-yahaya-tanko-752814140/"}> <FaLinkedin className="w-6 h-6"/></Link>
                </div>
            </div>


        </div>
    )
}