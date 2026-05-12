"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[40px] border border-[#E7E5E4] bg-white p-8 shadow-lg hover:shadow-2xl transition"
    >

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C8A96B]/10 blur-3xl"></div>

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

        {/* LEFT */}
        <div>

          {/* Top */}
          <div className="flex items-center gap-3">

            <span className="px-4 py-2 rounded-full bg-[#F5F5F4] text-sm font-medium text-[#111827]">

              {product.tag}

            </span>

            <span className="text-[#C8A96B] text-sm font-semibold">

              {product.match} Match

            </span>

          </div>

          {/* Title */}
          <h3 className="mt-6 text-4xl font-bold leading-tight text-[#111827]">

            {product.name}

          </h3>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">

            AI-curated premium product selected
            based on performance, aesthetics,
            and intelligent recommendations.

          </p>

          {/* Bottom */}
          <div className="mt-10 flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Starting From
              </p>

              <h4 className="mt-2 text-3xl font-bold text-[#111827]">

                ₹{product.price}

              </h4>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#111827] text-white flex items-center justify-center text-2xl hover:bg-[#1F2937] transition">

  <FiArrowUpRight />

</div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        {/* RIGHT VISUAL */}
<div className="relative h-[360px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#F5F5F4] via-[#E7E5E4] to-[#D6D3D1]">

  {/* Glow */}
  <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#C8A96B]/20 blur-3xl" />

  {/* Product Image */}
  <div className="relative w-full h-full">

    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-contain p-4 scale-95 group-hover:scale-100 transition duration-500"
    />

  </div>

  {/* Floating Rating */}
  <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 p-5 shadow-xl">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-sm text-gray-500">
          Customer Rating
        </p>

        <div className="mt-2 flex items-center gap-2">

          <FiStar className="text-[#C8A96B]" />

          <span className="font-semibold">
            4.9/5
          </span>

        </div>

      </div>

      <div className="w-14 h-14 rounded-2xl bg-[#111827] text-white flex items-center justify-center">

        ✦

      </div>

    </div>

  </div>

</div>

      </div>

    </motion.div>
    </Link>
  );
}