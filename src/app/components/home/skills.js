import Image from "next/image"


export const Skills = () => {
    return (
        <div className="flex flex-col mt-10">
            <div className="flex gap-24 mb-4">
                <div className=" text-white text-3xl font-medium mr-2">
                    <span className="text-primary">#</span>skills
                </div>
                <div className="h-[2px] w-1/5 place-self-center bg-primary">

                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="relative">

                    <Image className="absolute top-7" src={"/images/skills-dots.png"} height={63} width={63} />


                    {/* <div className="absolute">
                        <Image src={"/images/skills-dots.png"} height={63} width={63} />
                    </div> */}

                    <Image className="absolute top-48" src={"/images/skills-logo.png"} height={113} width={113} />


                    {/* <div className="absolute">

                    </div>

                    <div className="absolute">

                    </div> */}

                </div>
                <div className="flex flex-wrap gap-5">
                    <div className="w-full md:max-w-[180px]">
                        <div className="p-3  text-white border-2 border-gray  font-semibold text-base text-left">Languages
                        </div>
                        <div className="p-1 flex flex-wrap justify-between text-gray border-2 border-gray  font-normal text-base">
                            <span>Javascript</span>
                            <span>Javascript</span>
                            <span>Javascript</span>
                            <span>Javascript</span>
                            <span>Javascript</span>

                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px]">
                        <div className="p-3  text-white border-2 border-gray  font-semibold text-base text-left">Databases
                        </div>
                        <div className="p-1 flex flex-wrap justify-between text-gray border-2 border-gray  font-normal text-base">
                            <span>Mongo</span>
                            <span>PostgreSQL</span>
                            <span>SQLite</span>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px]">
                        <div className="p-3  text-white border-2 border-gray  font-semibold text-base text-left">Tools
                        </div>
                        <div className="p-1 flex flex-wrap gap-1 justify-between text-gray border-2 border-gray  font-normal text-base">
                            <span>VSCode</span>
                            <span>Linux</span>
                            <span>Prisma</span>
                            <span>Prisma</span>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px]">
                        <div className="p-3  text-white border-2 border-gray  font-semibold text-base text-left">Databases
                        </div>
                        <div className="p-1 flex flex-wrap justify-between text-gray border-2 border-gray  font-normal text-base">
                            <span>Mongo</span>
                            <span>PostgreSQL</span>
                            <span>SQLite</span>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px]">
                        <div className="p-3  text-white border-2 border-gray  font-semibold text-base text-left">Tools
                        </div>
                        <div className="p-1 flex flex-wrap gap-1 justify-between text-gray border-2 border-gray  font-normal text-base">
                            <span>VSCode</span>
                            <span>Linux</span>
                            <span>Prisma</span>
                            <span>Prisma</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}