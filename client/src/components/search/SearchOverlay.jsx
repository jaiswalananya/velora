"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";
import products from "../../data/products";

export default function SearchOverlay({
  isOpen,
  onClose,
}) {

  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] transition duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Search Panel */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-[#FAFAF9] z-[9999] transition duration-500 ${
          isOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >

        <div className="max-w-3xl mx-auto px-5 py-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">

            <div>

              <p className="text-[#C8A96B] uppercase tracking-[0.22em] text-[10px] font-semibold mb-2">

                AI Search

              </p>

              <h2 className="text-2xl font-bold text-[#111827]">

                Search Products

              </h2>

            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl border border-[#E7E5E4] flex items-center justify-center hover:bg-[#111827] hover:text-white transition"
            >

              <FiX className="text-lg" />

            </button>

          </div>

          {/* Search Input */}
          <div className="relative mb-6">

            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

            <input
              type="text"
              placeholder="Search premium products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-14 rounded-[20px] border border-[#E7E5E4] bg-white pl-14 pr-5 text-base outline-none focus:border-[#C8A96B] transition"
            />

          </div>

          {/* Results */}
          <div className="space-y-2">

            {query.length > 0 &&
              filteredProducts.map((product) => (

                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                >

                  <div className="group flex items-center justify-between rounded-[20px] border border-[#F0EEEB] bg-white px-4 py-3 hover:border-[#C8A96B]/30 hover:shadow-sm transition duration-300 cursor-pointer">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                      {/* Product Image */}
                      <div className="relative w-16 h-16 rounded-[18px] overflow-hidden bg-gradient-to-br from-[#F5F5F4] to-[#ECE9E4] shrink-0">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-300"
                        />

                      </div>

                      {/* Product Info */}
                      <div>

                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#C8A96B] font-semibold mb-1">

                          {product.category}

                        </p>

                        <h3 className="text-base font-semibold text-[#111827] leading-tight">

                          {product.name}

                        </h3>

                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="text-right">

                      <p className="text-lg font-bold text-[#111827]">

                        ₹{product.price}

                      </p>

                      <p className="text-xs text-gray-400 mt-1 group-hover:text-[#C8A96B] transition">

                        Open

                      </p>

                    </div>

                  </div>

                </Link>

              ))}

            {/* Empty State */}
            {query.length > 0 && filteredProducts.length === 0 && (

              <div className="rounded-[20px] border border-[#E7E5E4] bg-white py-10 text-center">

                <p className="text-lg font-semibold text-[#111827]">

                  No products found

                </p>

                <p className="text-sm text-gray-500 mt-2">

                  Try another keyword.

                </p>

              </div>

            )}

          </div>

          {/* Bottom Hint */}
          <div className="flex items-center justify-center gap-3 mt-10 text-sm text-gray-400">

            <div className="px-3 py-1 rounded-lg border border-[#E7E5E4] bg-white">

              Esc

            </div>

            <p>Press Esc to close</p>

          </div>

        </div>

      </div>
    </>
  );
}