"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScroll, useTransform, useInView, motion } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  open: (i) => ({
    opacity: 1,
    y: "0%",

    transition: {
      duration: 0.8,
      delay: 0.6 * i,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  closed: {
    opacity: 0,
    y: "100%",

    transition: { duration: 0.1 },
  },
};

export default function SocialMedia() {
  const container = useRef(null);
  const circle = useRef(null);
  const media = useRef(null);
  // const getScroll = () => {
  //   const scroll = media.current.offsetTop;
  //   console.log(scroll);
  // };

  const [show, setShow] = useState(false);

  const isInView = useInView(media, { once: show });

  // don't show again animation
  useEffect(() => {
    const handleScroll = (event) => {
      const { offsetTop } = container.current;
      const yScrollPosition = window.pageYOffset;

      if (yScrollPosition > offsetTop) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [container]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [0, 35]);

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const EndRightX = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const EndLeftX = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // const { scrollY } = useScroll({
  //   target: circle,
  //   offset: ["start center", "end center"],
  // });

  // const height = useTransform(scrollY, [0, 0.9], [50, 0]);

  return (
    <section ref={container} className="mt-32 mx-32 relative">
      <div className="flex flex-col gap-[32px] sticky ">
        {/* Images 1 */}
        <div className="flex relative gap-8 items-center justify-center">
          <motion.div style={{ x: x1, rotate: rotate1, y: y1 }}>
            <Image
              alt="image"
              className="object-cover rounded-3xl "
              src="/works/1.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
          <motion.div style={{ x: x2, rotate: rotate2, y: y2 }}>
            <Image
              alt="image"
              className="object-cover rounded-3xl "
              src="/works/2.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
        </div>

        {/* Images 2 */}
        <div className="flex relative gap-8 items-center justify-center">
          <motion.div style={{ x: x1, rotate: rotate3 }}>
            <Image
              alt="image"
              className="object-cover rounded-3xl shadow-2xl"
              src="/works/3.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
          <motion.div style={{ x: x2, rotate: rotate4 }}>
            <Image
              alt="image"
              className="object-cover rounded-3xl shadow-2xl"
              src="/works/4.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
        </div>

        {/* Images 3 */}
        <div className="flex relative gap-8 items-center justify-center ">
          <motion.div
            style={{ x: EndRightX, rotate: rotate5, y: y3 }}
            className="z-[2]"
          >
            <Image
              alt="image"
              className="object-cover rounded-3xl"
              src="/works/5.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
          <motion.div
            style={{ x: EndLeftX, rotate: rotate6, y: y3 }}
            className="z-[2]"
          >
            <Image
              alt="image"
              className="object-cover rounded-3xl "
              src="/works/6.jpg"
              width={768}
              height={0}
              sizes="100vw"
              style={{ width: "768px", height: "auto" }}
            />
          </motion.div>
        </div>

        {/* Links Social Media text */}
        <div
          ref={media}
          className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
        >
          <motion.div
            custom={1}
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            <Image
              alt="logo-big"
              className="mb-6"
              src="/logo-big.svg"
              width={104}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <motion.h1
              custom={1.4}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              className="font-bold text-[24px] w-[320px] text-center"
            >
              Curious about new developments and updates? Follow us at:
            </motion.h1>
            <motion.div
              custom={2}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              className="flex gap-4 text-lg"
            >
              <a href="#">LinkedIn </a> /
              <a href="https://dribbble.com/royabiz_official" target="_blank">
                Dribbble
              </a>{" "}
              /<a href="#">Instagram</a> /<a href="#">Behance</a>
            </motion.div>
            <motion.p
              custom={2.2}
              variants={opacity}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              className="font-bold tracking-widest text-xl text-primary"
            >
              @royabiz_official
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
