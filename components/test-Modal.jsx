// import { useEffect, useRef } from "react";
// import Image from "next/image";

// import { motion } from "framer-motion";
// import gsap from "gsap";

// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//   },
// };

// export default function Modal({ modal, projects }) {
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   useEffect(() => {
//     //Move Container
//     let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     //Move cursor
//     let xMoveCursor = gsap.quickTo(cursor.current, "left", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     let yMoveCursor = gsap.quickTo(cursor.current, "top", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     //Move cursor label
//     let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });

//     window.addEventListener("mousemove", (e) => {
//       const { pageX, pageY } = e;
//       xMoveContainer(pageX);
//       yMoveContainer(pageY);
//       xMoveCursor(pageX);
//       yMoveCursor(pageY);
//       xMoveCursorLabel(pageX);
//       yMoveCursorLabel(pageY);
//     });
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={modalContainer}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//         className="h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none"
//       >
//         <div
//           style={{
//             top: index * -100 + "%",
//             transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
//           }}
//           className="h-[100%] w-[100%] absolute"
//         >
//           {projects.map((project, index) => {
//             const { title, src, color } = project;
//             return (
//               <div
//                 key={`modal_${index}`}
//                 className="relative h-[100%] flex items-center justify-center  cursor-pointer"
//                 style={{ backgroundColor: color }}
//               >
//                 <Image
//                   className="h-auto "
//                   src={`/works/${src}`}
//                   width={300}
//                   height={0}
//                   alt={title}
//                   sizes="100vw"
//                   style={{ width: "320px", height: "auto" }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </motion.div>

//       <motion.div
//         ref={cursor}
//         className="w-[80px] h-[80px] bg-primary absolute pointer-events-none rounded-full flex items-center justify-center text-white"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       ></motion.div>
//       <motion.div
//         ref={cursorLabel}
//         className="w-[80px] h-[80px] hover:text-red-900 bg-transparent absolute pointer-events-none rounded-full flex items-center justify-center text-white italic font-bold "
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >
//         view
//       </motion.div>
//     </>
//   );
// }
