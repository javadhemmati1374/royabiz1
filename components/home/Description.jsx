"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Components
import Button from "../Button";

// Animations
export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.6, delay: 0.03 * i },
  }),
  closed: {
    y: "100%",
  },
};
export const opacity = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: 1 * i },
  }),
  closed: {
    opacity: 0,
  },
};

export default function Description() {
  const phrase =
    "We are a creative agency working with brands – building insightful strategy, creating unique designs and crafting experiences that bring positive change and value.";
  const container = useRef(null);
  const isInView = useInView(container);

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const { offsetTop } = container.current;

  //     const yScrollPosition = window.pageYOffset;

  //     if (yScrollPosition > offsetTop) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="container mt-32 mx-auto">
      <div ref={container} className="flex-row">
        <div className="flex relative mb-16">
          <p className="m-0 gap-[8px] text-[36px] leading-[1.4]">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden mr-[4px]"
                >
                  <motion.span
                    custom={index}
                    variants={slideUp}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                    className="mr-[4px]"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-24">
            <motion.div
              custom={1}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
            >
              <h1 className="font-bold text-[96px] leading-[6rem] mb-6">12+</h1>
              <p className="text-2xl">Years experience</p>
            </motion.div>
            <motion.div
              custom={1.4}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
            >
              <h1 className="font-black text-[96px] leading-[6rem] mb-6">
                36+
              </h1>
              <p className="text-2xl">Satisfied clients</p>
            </motion.div>
            <motion.div
              custom={1.8}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
            >
              <h1 className="font-bold text-[96px] leading-[6rem] mb-6">36+</h1>
              <p className="text-2xl">Projects delivered</p>
            </motion.div>
          </div>

          {/* buttons */}
          <Link href="/about" className="z-[1] block rounded-full">
            <Button containerStyles="w-[224px] h-[224px] italic rounded-full text-white text-[24px]">
              <p className="relative z-[1]">About me</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
