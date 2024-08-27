"use client";

import { useRef, useEffect } from "react";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text = [
  { title: "UI/UX Design" },
  { title: "Discovery" },
  { title: "Artworks" },
  { title: "Animation" },
  { title: "Development" },
  { title: "UI/UX Design" },
  { title: "Digital Art" },
  { title: "Discovery" },
];

const text2 = [
  { title: "UI/UX Design" },
  { title: "Discovery" },
  { title: "Artworks" },
  { title: "Animation" },
  { title: "Development" },
  { title: "UI/UX Design" },
  { title: "Digital Art" },
  { title: "Discovery" },
];

export default function Lines() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const firstText2 = useRef(null);
  const secondText2 = useRef(null);
  const slider2 = useRef(null);

  let xPercent = 0;
  let xPercent2 = 0;
  let direction = -1;
  let direction2 = 1;

  const comp = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".slider", {
          scrollTrigger: {
            trigger: ".slider",
            start: "top 90%",
            end: "center 0%",
            scrub: 0.25,
            // markers: true,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-400px",
        })
        .to(".slider2", {
          scrollTrigger: {
            trigger: ".slider2",
            start: "top 90%",
            end: "center 0%",
            scrub: 0.25,
            // markers: true,
            onUpdate: (e) => (direction2 = e.direction * 1),
          },
          x: "400px",
        });

      requestAnimationFrame(animate);
      requestAnimationFrame(animate2);
    }, comp);

    return () => ctx.revert();
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    if (document.querySelector(".slider")) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
    }

    xPercent += 0.02 * direction;
  };

  const animate2 = () => {
    if (xPercent2 <= -100) {
      xPercent2 = 0;
    }
    if (xPercent2 > 0) {
      xPercent2 = -100;
    }
    if (document.querySelector(".slider2")) {
      gsap.set(firstText2.current, { xPercent: xPercent2 });
      gsap.set(secondText2.current, { xPercent: xPercent2 });
      requestAnimationFrame(animate2);
    }

    xPercent2 += 0.02 * direction2;
  };

  return (
    <section className="relative mt-48 mb-96 overflow-hidden w-[100%] h-[280px] py-10">
      <div ref={comp} className="absolute">
        <div
          ref={slider}
          className="slider flex -rotate-3 bg-primary text-white"
        >
          <div ref={firstText} className="relative flex gap-x-16 py-8 pl-16">
            {text.map((text, index) => {
              return (
                <div key={index} className="flex gap-x-16 items-center">
                  <h2 className="text-nowrap text-[24px] font-bold uppercase">
                    {text.title}
                  </h2>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2998 13.6854C21.6893 11.8703 17.1613 7.70176 14.8767 2.24882L14.1823 0.590757L13.6271 2.30049C11.8005 7.92341 7.63336 12.4514 2.19058 14.7235L0.527187 15.4182L2.24219 15.9718C7.85396 17.7869 12.3807 21.9554 14.6653 27.4097L15.3596 29.0664L15.9149 27.358C17.7414 21.7338 21.9099 17.2057 27.3514 14.9336L29.0162 14.2403L27.2998 13.6854Z"
                      fill="white"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <div ref={secondText} className="relative flex gap-x-16 py-8 pl-16">
            {text.map((text, index) => {
              return (
                <div key={index} className="flex gap-x-16 items-center">
                  <h2 className="text-nowrap text-[24px] font-bold uppercase">
                    {text.title}
                  </h2>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2998 13.6854C21.6893 11.8703 17.1613 7.70176 14.8767 2.24882L14.1823 0.590757L13.6271 2.30049C11.8005 7.92341 7.63336 12.4514 2.19058 14.7235L0.527187 15.4182L2.24219 15.9718C7.85396 17.7869 12.3807 21.9554 14.6653 27.4097L15.3596 29.0664L15.9149 27.358C17.7414 21.7338 21.9099 17.2057 27.3514 14.9336L29.0162 14.2403L27.2998 13.6854Z"
                      fill="white"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
        <div
          ref={slider2}
          className="slider2 flex rotate-3 bg-secondary text-white relative !left-[-500px] shadow-xl"
        >
          <div ref={firstText2} className="relative flex gap-x-16 py-8 pl-16">
            {text2.map((text, index) => {
              return (
                <div key={index} className="flex gap-x-16 items-center ">
                  <h2 className="text-nowrap text-[24px] font-bold uppercase">
                    {text.title}
                  </h2>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2998 13.6854C21.6893 11.8703 17.1613 7.70176 14.8767 2.24882L14.1823 0.590757L13.6271 2.30049C11.8005 7.92341 7.63336 12.4514 2.19058 14.7235L0.527187 15.4182L2.24219 15.9718C7.85396 17.7869 12.3807 21.9554 14.6653 27.4097L15.3596 29.0664L15.9149 27.358C17.7414 21.7338 21.9099 17.2057 27.3514 14.9336L29.0162 14.2403L27.2998 13.6854Z"
                      fill="white"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <div ref={secondText2} className="relative flex gap-x-16 py-8 pl-16">
            {text2.map((text, index) => {
              return (
                <div key={index} className="flex gap-x-16 items-center ">
                  <h2 className="text-nowrap text-[24px] font-bold uppercase">
                    {text.title}
                  </h2>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2998 13.6854C21.6893 11.8703 17.1613 7.70176 14.8767 2.24882L14.1823 0.590757L13.6271 2.30049C11.8005 7.92341 7.63336 12.4514 2.19058 14.7235L0.527187 15.4182L2.24219 15.9718C7.85396 17.7869 12.3807 21.9554 14.6653 27.4097L15.3596 29.0664L15.9149 27.358C17.7414 21.7338 21.9099 17.2057 27.3514 14.9336L29.0162 14.2403L27.2998 13.6854Z"
                      fill="white"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
