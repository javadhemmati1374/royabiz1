"use client";

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileNavBox from "./MobileNavBox";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight * 1,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            },
            setIsActive(false)
          );
        },
      },
    });
  }, []);
  return (
    <>
      <div
        ref={button}
        className="scale-0 p-[30px] top-0 fixed right-0 z-10 overflow-hidden"
      >
        <Button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="w-[80px] h-[80px] rounded-full flex cursor-pointer justify-center items-center border-border border-[1px]"
        >
          <div
            className={`w-[100%] after:content-[""] after:z-10 after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:-top-[5px] before:content-[""] before:z-10 before:block before:w-[40%] before:bg-white before:h-[1px] before:m-auto before:relative before:transition-transform before:top-[5px] ${
              isActive
                ? "after:!-top-[1px] after:rotate-45 before:!top-[1px] before:-rotate-45"
                : ""
            }`}
          ></div>
        </Button>
      </div>
      <AnimatePresence mode="wait" className="z-10">
        {isActive && <MobileNavBox />}
      </AnimatePresence>
    </>
  );
}
