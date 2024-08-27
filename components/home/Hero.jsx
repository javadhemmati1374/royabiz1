import Link from "next/link";

import { AnimatedTooltip } from "../ui/animated-tooltip";

// Component
import SliderWorks from "./SliderWorks";
import Button from "../Button";

const logo = [
  {
    id: 1,
    name: "Hello Friends  👋",
    image: "/logo.svg",
  },
];

export default function Hero() {
  return (
    <section>
      <div className="h-[80rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.8] bg-grid-black/[0.1] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 !z-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        {/* hero */}
        <div className="container py-4 pt-48 mx-auto">
          <div className="flex flex-col mx-auto xl:mx-0 xl:text-left">
            <div className="flex gap-4 justify-start items-center text-[64px] font-bold text-secondary z-0">
              With
              <AnimatedTooltip items={logo} />
              RoyaBiz
            </div>
            <div className="text-[64px] font-bold text-secondary -mt-4 z-0">
              Build your royal business
            </div>
            <p className="text-[24px] mt-2 leading-8 max-w-[850px] mx-auto xl:mx-0 z-0">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on cutting edge.
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col items-end -mt-28">
            <Link href="/contact" className="z-[1] block rounded-full">
              <Button containerStyles="w-[224px] h-[224px] italic rounded-full text-white text-[24px]">
                <p className="relative z-[1]">Get Started</p>
              </Button>
            </Link>
          </div>
        </div>
        {/* slider works */}
        <SliderWorks />
      </div>
    </section>
  );
}
