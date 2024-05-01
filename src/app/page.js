import { NavBar } from "@comp/navBar";
import { Hero } from "@comp/hero";
import { Quote } from "@comp/quote";
export default function Home() {
  return (

    <div className="custom-bg px-[100px]">
      <NavBar />
      <Hero />
      <Quote />
    </div>

  );
}
