import Image from "next/image";
import { HeroTextLockup } from "./HeroTextLockup";
import heroImage from "../../../public/hi-res-background.jpg";
export const PageHero = () => {
  return (
    <div className="hero-content flex flex-col md:flex-row w-full m-auto gap-6 px-0 md:px-4 items-stretch">
      <div className="w-full relative">
        <Image
          src={heroImage}
          alt="hero image"
          sizes="100vw"
          className="-z-10 md:absolute md:h-full md:w-full 
          md:left-0 md:top-0 md:right-0 md:bottom-0 block w-full object-cover"
        />
      </div>
      <div className="flex w-full p-2  justify-center">
        <HeroTextLockup />
      </div>
    </div>
  );
};
