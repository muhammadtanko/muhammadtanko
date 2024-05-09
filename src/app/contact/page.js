import { NavBar } from "@comp/global/navBar";
import { Footer } from "@comp/global/footer";
import { Contact } from "@comp/contact/contact";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";


export default function ContactPage() {
    return (
        <div className="md:h-dvh bg-bg-color px-[100px]">
            <NavBar />
            <div className="text-white font-semibold text-3xl">
                <span className="text-primary ">/</span> contacts
            </div>
            <div className="text-gray mb-10">
                who am i?
            </div>
            <Contact />
            <div className="text-white font-medium text-3xl mb-10">
                <span className="text-primary ">#</span>all-media
            </div>

            <div class="flex gap-3 text-gray">
                <RiTwitterXLine className="w-6 h-6" />
                <span className="">@teekay_014</span>
                <GrInstagram className="w-6 h-6" />
                <span className="">@abba_tk</span>
            </div>
            <Footer />
        </div>
    );
}
