import Navbar from "./floating-nav";
import Intro from "./intro";
import Image from "next/image";
import bgPattern from "@/public/assets/images/bg-pattern.png";

const TopComponent = ({}) => {
  return (
    <div className="relative px-[128px] pt-10 pb-24">
      <div className="absolute inset-0">
        <Image
          src={bgPattern}
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Intro />
      </div>
    </div>
  );
};

export default TopComponent;
