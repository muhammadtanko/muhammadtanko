

export const ProjectCard = () => {
    return (
        <div className="w-full md:w-[30%] border-2 border-gray  shadow rounded ">
            <div className="h-48  border-2 border-gray   bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/banner.jpg")' }}
            ></div>
            <div className="p-1 flex flex-wrap justify-between text-gray border-2 border-gray  font-normal text-base text-center">
                <div>REACT</div>
                <div>REDUX</div>
                <div>TAILWINDCSS</div>
                <div>NODE.JS</div>
                <div>MongoDB</div>

            </div>
            <div className="p-3">
                <div className="text-white text-2xl font-medium mb-3">ChertNodes</div>
                <div className="text-base font-normal text-gray mb-3">Minecraft servers hosting </div>
                <div className="flex gap-10">

                    <div className="p-1 border-2 border-primary text-white">
                        Live &lt;~~&gt;
                    </div>
                    <div className="p-1 border-2 border-gray text-white">
                        Cached &ge;
                    </div>
                </div>
            </div>
        </div>
    )
}
