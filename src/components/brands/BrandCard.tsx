import { motion } from "framer-motion";
import React, { useState } from "react";

type BrandCardProps = {
  lightImage: string;
  darkImage: string;
  brandName: string;
  hoverColor: string;
};

const BrandCard = ({
  lightImage,
  darkImage,
  brandName,
  hoverColor,
}: BrandCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01, background: hoverColor }}
      transition={{
        scale: { type: "spring", stiffness: 200 },
        background: { duration: 0.2, ease: "easeInOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full md:bg-gray-100 h-full md:min-h-[155px] lg:min-h-[214px] rounded-lg flex items-center justify-center"
    >
      <motion.img
        src={isHovered ? lightImage : darkImage}
        alt={brandName}
        className="w-[60%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BrandCard;
