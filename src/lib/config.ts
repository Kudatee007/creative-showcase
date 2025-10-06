// import type { RefObject } from "react";
// import useMouse from "@react-hook/mouse-position";

// export const useVariants = (ref: RefObject<HTMLDivElement | null>) => {
//     default: {
//         opacity: 1, 
//         height: 10, 
//         width: 10, 
//         fontsize: "20px",
//         backgroundColor: "#13ACDE",
//         x:  mouseXPosition,
//         y:  mouseYPosition,
//         transition: {
//         type: "spring",
//         mass: 0.6,
//         },
//     },
//         buy: {
//         opacity: 1, 
//         backgroundColor: "#29B550", 
//         color: "#000',
//         height: 64, 
//         width: 64, 
//         fontsize: "32px",
//         x: mouseXPosition - 32,
//         y: mouseYPosition -32,
//         },
//         sell: {
//         opacity: 1, 
//         backgroundColor: "#EF5151" 
//         color: "#000", 
//         height: 64, 
//         width: 64,
//         fontsize: "32px",
//         x: mouseXPosition - 48,
//         y: mouseYPosition - 48,
//         },
//     },
//   const mouse = useMouse(ref as unknown as any, {
//     enterDelay: 100,
//     leaveDelay: 100,
//   });

//   let mouseXPosition = 0;
//   let mouseYPosition = 0;

//   if (mouse.clientX != null) mouseXPosition = mouse.clientX;
//   if (mouse.clientY != null) mouseYPosition = mouse.clientY;

//   return { mouseXPosition, mouseYPosition };
// };