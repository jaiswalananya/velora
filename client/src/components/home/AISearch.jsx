"use client";

import { motion } from "framer-motion";
import {
  FiSearch,
  FiMic,
  FiArrowRight,
} from "react-icons/fi";

import Container from "../ui/Container";

const suggestions = [
  "Luxury watches under ₹20K",
  "Gaming setup for students",
  "Minimal desk accessories",
  "Premium wireless audio",
];

export default function AISearch() {
  return (
    <section className="py-36 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#C8A96B]/10 blur-3xl"></div>

      <Container>

        <div className="relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">

            <p className="text-[#C8A96B] font-semibold uppercase tracking-[0.3em]">

              AI Search Experience

            </p>

            <h2 className="mt-8 text-5xl lg:text-7xl leading-tight font-bold text-[#111827]">

              Search Products
              <br />

              Like A Conversation

            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">

              Velora understands intent, preferences,
              budgets, and lifestyle — helping users
              discover products naturally through AI.

            </p>

          </div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 max-w-5xl mx-auto"
          >

            <div className="relative overflow-hidden rounded-[40px] border border-[#E7E5E4] bg-white shadow-2xl">

              {/* Top Glow */}
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-[#C8A96B]/10 via-transparent to-[#111827]/5"></div>

              <div className="relative z-10 p-8 lg:p-10">

                {/* Input */}
                <div className="flex items-center gap-5">

                  {/* Search Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#111827] text-white flex items-center justify-center text-2xl shadow-lg">

                    <FiSearch />

                  </div>

                  {/* Text */}
                  <div className="flex-1">

                    <p className="text-sm uppercase tracking-[0.25em] text-gray-400">

                      AI Shopping Assistant

                    </p>

                    <h3 className="mt-3 text-2xl lg:text-3xl font-semibold text-[#111827]">

                      “Find premium headphones under ₹10,000 for travel”

                    </h3>

                  </div>

                  {/* Voice */}
                  <button className="w-16 h-16 rounded-2xl border border-[#E7E5E4] flex items-center justify-center text-2xl text-[#111827] hover:bg-[#F5F5F4] transition">

                    <FiMic />

                  </button>

                </div>

                {/* Suggestions */}
                <div className="mt-10 flex flex-wrap gap-4">

                  {suggestions.map((item, index) => (

                    <motion.button
                      key={index}
                      whileHover={{ y: -4 }}
                      className="px-6 py-3 rounded-full border border-[#E7E5E4] bg-[#FAFAF9] text-[#111827] hover:bg-white transition shadow-sm"
                    >

                      {item}

                    </motion.button>

                  ))}

                </div>

                {/* AI Result Card */}
                <div className="mt-12 rounded-[32px] bg-[#111827] p-8 text-white relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C8A96B]/20 blur-3xl"></div>

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                    <div>

                      <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm">

                        AI Recommendation

                      </p>

                      <h3 className="mt-4 text-4xl font-bold leading-tight">

                        Sony WH-1000XM5
                      </h3>

                      <p className="mt-5 text-gray-300 leading-8 max-w-2xl">

                        Based on your preferences,
                        this product offers premium sound,
                        long battery life, lightweight comfort,
                        and excellent travel performance.

                      </p>

                    </div>

                    {/* CTA */}
                    <button className="w-20 h-20 rounded-3xl bg-white text-[#111827] flex items-center justify-center text-3xl shadow-xl hover:scale-105 transition">

                      <FiArrowRight />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}