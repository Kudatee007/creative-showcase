// components/AnimatedCursor.tsx
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

const cursorVariants = (mouseX: number, mouseY: number): Variants => ({
  idle: {
    opacity: 1,
    height: 13,
    width: 13,
    fontSize: "12px",
    backgroundColor: "#9a9a9a",
    x: mouseX,
    y: mouseY,
    transition: { type: "tween", duration: 0.05, ease: "linear" },
  },
  view: {
    opacity: 1,
    backgroundColor: "#222",
    color: "#fff",
    height: 35,
    width: 35,
    fontSize: "8px",
    x: mouseX - 32,
    y: mouseY - 32,
    transition: { type: "tween", duration: 0.05, ease: "linear" },
  },
});

type AnimatedCursorProps = {
  mode?: "idle" | "view";
  text?: string;
};

export default function AnimatedCursor({ mode = "idle", text = "" }: AnimatedCursorProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const variants = cursorVariants(mousePos.x, mousePos.y);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:flex items-center justify-center"
      variants={variants}
      animate={mode}
      style={{ fontWeight: 600 }}
    >
      {/* Show text only when not tiny */}
      {mode !== "idle" ? <span>{text}</span> : null}
    </motion.div>
  );
}
