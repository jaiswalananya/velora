"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CategoryCard({ category, large }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={`
        relative overflow-hidden rounded-[36px]
        bg-gradient-to-br ${category.bg}
        p-10 shadow-lg border border-[#E7E5E4]
        hover:shadow-2xl transition
        flex flex-col
        ${large ? "min-h-[340px]" : "min-h-[240px]"}
      `}
    >

      {/* Luxury Visual Layers */}

      <div className="absolute right-[-40px] bottom-[-40px] w-[240px] h-[240px] rounded-full bg-white/40 blur-3xl"></div>

      <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full border border-white/40 backdrop-blur-md"></div>

      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/50 backdrop-blur-xl shadow-2xl"></div>

      <div className="absolute top-10 right-10 w-16 h-16 rounded-2xl rotate-12 bg-white/30 backdrop-blur-md border border-white/40"></div>

      {/* Content */}
      <div className="relative z-10">

        <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Premium Collection
        </p>

        <h3 className="mt-5 text-[36px] leading-tight font-bold text-[#111827] max-w-md">

          {category.title}

        </h3>

        <p className="mt-5 text-gray-600 max-w-sm leading-8 text-lg">

          {category.subtitle}

        </p>

      </div>

      {/* Bottom */}
      <div className="relative z-10 flex items-center justify-between mt-10">

        <button className="px-7 py-3 rounded-full bg-[#111827] text-white font-medium hover:bg-[#1F2937] transition duration-300 shadow-md">

          Explore

        </button>

        <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-xl flex items-center justify-center text-xl text-[#111827] border border-white/40 shadow-lg">

          <FiArrowUpRight />

        </div>

      </div>

    </motion.div>
  );
}