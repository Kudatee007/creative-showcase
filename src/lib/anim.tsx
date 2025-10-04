// anim.js
import type { Variants } from "framer-motion";

export const cardV: Variants = {
  rest: {
    backgroundColor: "rgba(255,255,255,0)",
    padding: 0,                 // p-0 at rest
  },
  hover: {
    backgroundColor: "rgb(191,219,254)",
    padding: 20,                // p-6 on hover (in px)
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
};

export const videoV = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
};

export const titleV = {
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: -6 },
};
