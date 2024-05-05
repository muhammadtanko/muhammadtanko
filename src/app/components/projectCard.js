

// export const ProjectCard = () => {
//     return (
//         <div className="border-2 border-t-gray">
//             <div className="">
//                 {/* image */}
//             </div>
//             <div className="">

//             </div>
//             <div className="">

//             </div>
//         </div>
//     )
// }
// export const ProjectCard = () => {
//     return (
//         <div className="border-2 border-gray-200 overflow-hidden w-72 ">
//             <div className="">
//                 <img src="../../../public/images/banner.jpg" alt="Project Image" className="object-cover w-full h-full" />
//             </div>
//             <div className="">
//                 {/* Text or content */}
//             </div>
//             <div className="">
//                 {/* Additional content */}
//             </div>
//         </div>
//     )
// }

// import Image from 'next/image';

// export const ProjectCard = () => {
//     return (
//         <div className="border-2 border-gray-200 relative  w-72 ">
//             <div className="w-full h-full ">
//                 <Image
//                     src="/images/banner.jpg"
//                     alt="Project Image"
//                     layout="fill"
//                     objectFit="cover"
//                     objectPosition="center"
//                 />
//             </div>
//             <div className="text-white ">
//                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam quis voluptates tenetur ipsam minima incidunt corporis iste quidem natus et ratione deserunt sequi vitae dolores officiis dicta aliquam, aut modi laboriosam neque repudiandae id consequatur beatae. Suscipit voluptates perspiciatis consequuntur culpa totam, provident quaerat mollitia nobis commodi. Doloremque, placeat?
//             </div>
//             <div className="">
//                 {/* Additional content */}
//             </div>
//         </div>
//     )
// }


import Image from 'next/image';

export const ProjectCard = () => {
    return (
        <div className="w-[30%] border-2 border-gray  shadow rounded ">
            <div
                className="h-48  border-2 border-gray   bg-cover bg-center"
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
