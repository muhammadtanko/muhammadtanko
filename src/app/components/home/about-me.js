import Image from "next/image"
import Link from "next/link"

export const AboutMe = () => {

    return (
        <div className="mt-10">
            <div className="flex mb-4 ">
                <div className=" text-white text-3xl font-medium mr-7">
                    <span className="text-primary">#</span>about-me
                </div>
                <div className="h-[3px] w-2/5 place-self-center bg-primary"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="text-gray font-normal text-base ">
                    <p className="mb-5">
                        Hello, I'm Muhammad!
                    </p>
                    <div className="mb-5 max-w-lg">
                        A software engineer based in Nigeria who develops responsive websites from scratch and turns them into modern, user-friendly web experiences.
                    </div>
                    <div className="max-w-lg">
                        Transforming my creativity and knowledge into  software systems that solve problems has been my passion. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </div>
                    <div className="mt-5">
                        <Link href={"/contact"}
                            className="text-center border-primary border-2 p-2.5 w-[140px] text-white"
                        >
                            Read more!
                        </Link>
                    </div>
                </div>
                <div className=" ">
                    <Image className="-mt-10" src={"/images/01M.png"} width={339} height={400} />
                </div>
            </div>

        </div>
    )
}