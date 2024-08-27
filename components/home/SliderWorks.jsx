"use client";

import { useRef, useEffect } from "react";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import DevImg from "../DevImg";

const images = [
  { imgSrc: "/works/1.jpg", alt: "work-1" },
  { imgSrc: "/works/2.jpg", alt: "work-2" },
  { imgSrc: "/works/3.jpg", alt: "work-3" },
  { imgSrc: "/works/4.jpg", alt: "work-4" },
  { imgSrc: "/works/5.jpg", alt: "work-5" },
  { imgSrc: "/works/6.jpg", alt: "work-6" },
];

export default function SliderWorks() {
  // gsap.config({
  //   nullTargetWarn: false,
  //   trialWarn: false,
  // });
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
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight * 2,
            scrub: 0.25,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-300px",
        })
        .to(".slider2", {
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight * 2,
            scrub: 0.25,
            onUpdate: (e) => (direction2 = e.direction * 1),
          },
          x: "300px",
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

    xPercent += 0.01 * direction;
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

    xPercent2 += 0.01 * direction2;
  };

  return (
    <div className="relative -mt-48 overflow-hidden w-[auto] h-[860px]">
      <div ref={comp} className="absolute -rotate-3">
        <div ref={slider} className="slider flex mb-16 ">
          <div ref={firstText} className="relative flex gap-x-16 pl-16">
            {images.map((image, index) => {
              return (
                <DevImg
                  key={index}
                  containerStyles="works-slide"
                  imgSrc={image.imgSrc}
                  alt={image.alt}
                />
              );
            })}
          </div>
          <div ref={secondText} className="relative flex gap-x-16 pl-16">
            {images.map((image, index) => {
              return (
                <DevImg
                  key={index}
                  containerStyles="works-slide"
                  imgSrc={image.imgSrc}
                  alt={image.alt}
                />
              );
            })}
          </div>
        </div>
        <div ref={slider2} className="slider2 flex relative !left-[-500px]">
          <div ref={firstText2} className="relative flex gap-x-16 pl-16">
            {images.map((image, index) => {
              return (
                <DevImg
                  key={index}
                  containerStyles="works-slide"
                  imgSrc={image.imgSrc}
                  alt={image.alt}
                />
              );
            })}
          </div>
          <div ref={secondText2} className="relative flex gap-x-16 pl-16">
            {images.map((image, index) => {
              return (
                <DevImg
                  key={index}
                  containerStyles="works-slide"
                  imgSrc={image.imgSrc}
                  alt={image.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
