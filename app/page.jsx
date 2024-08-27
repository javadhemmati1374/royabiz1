"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// smooth as butter scroll @Lenis
import Lenis from "@studio-freight/lenis";

// components
import Hero from "@/components/home/Hero";
import Description from "@/components/home/Description";
import ProjectsList from "@/components/home/ProjectsList";
import Lines from "@/components/home/Lines";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // lenis Scroll page smooth
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // setTimeout Preloader
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <ProjectsList />
      <Lines />
      <Footer />
    </main>
  );
}
