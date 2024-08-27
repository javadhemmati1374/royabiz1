"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

// components
import Project from "../Project";
import Button from "../Button";

const projects = [
  {
    title: "HematPlastic",
    method: "Design & Development",
    src: "2.jpg",
    color: "#eee",
    path: "/about",
  },
  {
    title: "Crypto Wallet",
    method: "User Research & Design",
    src: "1.jpg",
    color: "#141517",
    path: "/works",
  },
  {
    title: "ETLO - Dashboard",
    method: "Design",
    src: "2.jpg",
    color: "#e3e3e3",
    path: "/about",
  },
  {
    title: "Pet Shop",
    method: "Design",
    src: "1.jpg",
    color: "#454353",
    path: "/contact",
  },
  {
    title: "TakNos IT",
    method: "Design & Development",
    src: "2.jpg",
    color: "#151353",
    path: "/contact",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ProjectsList() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="container py-4 mt-32 mx-auto"
    >
      <h2 className="text-foreground pb-8">RECENT WORK</h2>
      <div className="w-[100%] flex items-center justify-center flex-col">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              method={project.method}
              path={project.path}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <div className="relative py-10 flex justify-center items-center mt-16 overflow-hidden">
        <Link
          href="/work"
          className="z-[1] block w-[16rem] h-[5rem] rounded-full"
        >
          <Button
            backgroundColor="#fff"
            containerStyles="w-[16rem] h-[5rem] group mx-auto rounded-full border flex items-center justify-center font-bold cursor-pointer hover:text-white"
          >
            <p className="z-[1] transition-colors duration-[0.6s] ease-linear group-hover:transition-colors group-hover:duration-[0.4s] group-hover:ease-linear ">
              More work
            </p>
          </Button>
        </Link>
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="h-[480px] w-[440px] fixed top-[50%] left-[50%] bg-white overflow-hidden pointer-events-none z-[3]"
        >
          <div
            style={{
              top: index * -100 + "%",
              transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="h-[100%] w-[100%] relative"
          >
            {projects.map((project, index) => {
              const { src, color, title } = project;
              return (
                <div
                  className="h-[100%] w-[100%] flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    className="h-auto"
                    src={`/works/${src}`}
                    width={400}
                    height={0}
                    alt={title}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="w-[80px] h-[80px] bg-primary fixed rounded-full flex items-center justify-center text-white pointer-events-none z-[3]"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="w-[80px] h-[80px] italic font-bold bg-transparent fixed rounded-full flex items-center justify-center text-white pointer-events-none z-[3]"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </section>
  );
}
