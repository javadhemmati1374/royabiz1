import React, { useState } from "react";
import { usePathname } from "next/navigation";

// link (next js)
import Link from "next/link";
// next hooks

//framer motion
import { motion } from "framer-motion";

// anim . js
export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
// anim . js

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function MobileNavBox() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] bg-foreground fixed right-0 top-0 text-white "
    >
      <div className="box-border h-[100%] p-[100px] flex flex-col justify-between ">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[56px]   "
        >
          <div className="text-border border-b-[1px] border-border uppercase text-[11px] mb-[40px]">
            <p className="mb-4">Navigation</p>
          </div>
          {navItems.map((data, index) => {
            const { title, href } = data;

            return (
              <motion.div
                className="relative flex items-center"
                onMouseEnter={() => {
                  setSelectedIndicator(href);
                }}
                custom={index}
                variants={slide}
                key={index}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.div
                  variants={scale}
                  animate={selectedIndicator == data.href ? "open" : "closed"}
                  className="w-[10px] h-[10px] bg-white rounded-full absolute -left-[30px]"
                ></motion.div>
                <Link href={href}>{title}</Link>
              </motion.div>
            );
          })}
        </div>
        {/* footer */}
        <div>
          <p className="text-border uppercase text-[11px] mb-4">SOCIALS</p>
          <div className="flex w-[100%] justify-between text-[12px] gap-[40px]">
            <a href="#">LinkedIn </a>
            <a href="https://dribbble.com/royabiz_official" target="_blank">
              Dribbble
            </a>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
          </div>
        </div>

        {/* footer */}
      </div>
      {/* curve */}
      <svg className="absolute top-0 -left-[99px] w-[100px] h-[100%] fill-foreground stroke-none">
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          exit="exit"
        ></motion.path>
      </svg>
      {/* curve */}
    </motion.div>
  );
}
