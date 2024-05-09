import Link from "next/link";
import Image from "next/image";

export const About = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="text-gray font-normal text-base ">
                <p className="mb-6">
                    Hello, i'm Muhammad!
                </p>
                <div className="mb-6 max-w-lg">
                    I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </div>
                <div className="max-w-lg mb-6">
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </div>
                <div className="">
                    <Link href={"/contact"}
                        className="text-center border-primary border-2 p-2.5 w-[140px] text-white"
                    >
                        Read more!
                    </Link>
                </div>
            </div>
            <div className=" ">
                <Image className="-mt-24" src={"/images/about-image.png"} width={339} height={510} />
            </div>
        </div>
    )
}