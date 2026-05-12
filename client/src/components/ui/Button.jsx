"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
}) {

  const variants = {
    primary:
      "bg-[#111827] text-white hover:bg-[#1F2937]",

    secondary:
      "bg-white text-[#111827] border border-[#E7E5E4] hover:bg-[#F5F5F4]",

    gold:
      "bg-[#C8A96B] text-white hover:opacity-90",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex items-center justify-center gap-3
        rounded-full font-medium transition shadow-md
        ${variants[variant]}
        ${sizes[size]}
      `}
    >

      {children}

      {icon && (
        <span className="text-lg">
          {icon}
        </span>
      )}

    </motion.button>
  );
}