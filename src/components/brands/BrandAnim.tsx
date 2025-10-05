"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

type BrandItem = {
  image: string;
  hoverImage?: string;
  bgColor?: string;
  hoverColor?: string;
  alt?: string;
};

export function BrandAnim({
  items,
  startIndex = 0,
}: {
  items: BrandItem[];
  startIndex?: number;
}) {
  const [index, setIndex] = React.useState(startIndex % items.length);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  const currentItem = items[index];
  return (
    <div className="relative flex items-center justify-center mx-auto w-full h-[50vw] md:h-[27vh] rounded-lg overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ y: "100%" }}
          animate={{
            y: 0,
          }}
          exit={{ y: "-100%" }}
          transition={{
            y: { duration: 1, ease: "easeInOut" },
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          // className={`absolute inset-0 ${currentItem.bgColor} md:!bg-gray-100 flex items-center justify-center`}
          style={{ 
            backgroundColor: isHovered ? currentItem.hoverColor : currentItem.bgColor 
          }}
          className="absolute inset-0 md:bg-gray-100 flex items-center justify-center"
        >
          <motion.img
            src={isHovered ? currentItem.hoverImage : currentItem.image}
            alt={currentItem.alt || "Brand logo"}
            className="max-h-[150px] max-w-[80%] object-contain"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
