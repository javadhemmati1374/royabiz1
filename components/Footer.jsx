import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Button from "./Button";
import Magnetic from "./Magnetic";

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [150, 90]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section className="overflow-hidden -mt-[400px]">
      {/* Circle Container */}
      <motion.div style={{ height }} className="relative">
        <div className="absolute h-[800%] w-[120%] -left-[10%] shadow-[0_80px_60px_rgba(0,0,0,0.8)] bg-white rounded-[0_0_50%_50%] z-[1]"></div>
      </motion.div>

      <motion.div
        ref={container}
        style={{ y }}
        className="text-white flex flex-col items-center justify-center bg-foreground relative"
      >
        <div className="pt-[18vh] w-[100%] max-w-[1800px] bg-foreground flex flex-col justify-between h-[100vh] z-[4]">
          <div>
            <div className="border-b-[1px] border-b-border pb-[50px] mx-[200px] relative ">
              <span className="flex items-center">
                <div className="w-[80px] h-[80px] relative rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    fill="true"
                    alt="Logo footer"
                    src={`/logo.svg`}
                    priority={true}
                  />
                </div>
                <h2 className="ml-[0.3em] text-[5vw] font-bold leading-tight">
                  Let's work
                </h2>
              </span>
              <h2 className="text-[5vw] m-0 font-bold leading-tight">
                together
              </h2>
              <motion.div
                style={{ x }}
                className="absolute left-[calc(100%-600px)] top-[calc(100%-110px)] z-10"
              >
                <Link href="/contact" className="block rounded-full">
                  <Button
                    hoverColor="#803580"
                    backgroundColor="#682c68"
                    containerStyles="w-[224px] h-[224px] italic text-white text-[24px] rounded-full"
                  >
                    <p className="relative z-[1]">Get in touch</p>
                  </Button>
                </Link>
              </motion.div>
              <motion.svg
                className="absolute top-[30%] left-[100%]"
                style={{ rotate, scale: 2 }}
                width="13"
                height="13"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="white"
                />
              </motion.svg>
            </div>

            <div className="flex gap-[20px] mt-[50px] mx-[200px] relative">
              <Button containerStyles="h-20 w-80 border border-border rounded-full">
                <p className="z-[1]">royabiz.official@gmail.com</p>
              </Button>
              <Button containerStyles="h-20 w-64 border border-border rounded-full">
                <p className="z-[1]">+98 913 002 62 04</p>
              </Button>
            </div>
          </div>

          <div className="info flex justify-between p-[40px] ">
            <div className="flex gap-[32px] items-end">
              <span>
                <Magnetic>
                  <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                    Privacy & Cookie Policy
                  </p>
                </Magnetic>
              </span>
              <span className="flex gap-2 items-center justify-center">
                <Magnetic>
                  <a href="#">
                    <p className="m-0 p-[2.5px] font-bold cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                      English
                    </p>
                  </a>
                </Magnetic>
                /
                <Magnetic>
                  <a href="#">
                    <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                      Persian
                    </p>
                  </a>
                </Magnetic>
              </span>
            </div>
            <div>
              <span>
                <p className="m-0 p-[2.5px] ">Copyright © 2024 RoyaBiz.</p>
              </span>
            </div>

            <div className="flex gap-[20px] items-end">
              <Magnetic>
                <a href="#">
                  <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                    LinkedIn
                  </p>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#">
                  <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                    Dribbble
                  </p>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#">
                  <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                    Instagram
                  </p>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#">
                  <p className="m-0 p-[2.5px] cursor-pointer after:content-[''] after:w-[0%] after:h-[1px] after:bg-white after:block after:mt-[2px] after:relative after:left-[50%] after:-translate-x-[50%] after:transition-[width_0.2s_linear] hover:after:w-[100%]">
                    Behance
                  </p>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
