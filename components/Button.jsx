import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

export default function Button({
  children,
  hoverColor = "#682c68",
  backgroundColor = "#1c1e21",
  containerStyles,
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <Magnetic>
      <div
        className={`${containerStyles}`}
        style={{
          overflow: "hidden",
          backgroundColor,
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor: hoverColor }}
          className="w-[100%] h-[150%] absolute rounded-full top-[100%] "
        ></div>
      </div>
    </Magnetic>
  );
}
