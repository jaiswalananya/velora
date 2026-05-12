"use client";

import { FiX, FiStar } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

export default function ProductModal({
  product,
  isOpen,
  onClose,
}) {

  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-[#FAFAF9] rounded-[2rem] z-[9999] overflow-hidden shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="bg-gradient-to-br from-[#E8DCC0] to-[#DCEEFF] min-h-[500px] flex items-center justify-center">

            <div className="w-64 h-64 rounded-[2rem] bg-white/30 backdrop-blur-xl" />

          </div>

          {/* Content */}
          <div className="p-10 relative">

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-11 h-11 rounded-2xl border border-[#E7E5E4] flex items-center justify-center hover:bg-[#111827] hover:text-white transition"
            >

              <FiX />

            </button>

            {/* Label */}
            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs font-semibold mb-4">

              Premium Collection

            </p>

            {/* Title */}
            <h2 className="text-5xl font-bold text-[#111827] leading-tight mb-5">

              {product.name}

            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">

              <div className="flex items-center gap-1 text-[#C8A96B]">

                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />

              </div>

              <span className="text-gray-500">
                (124 Reviews)
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">

              Crafted with premium materials and powered by
              intelligent technology, this product combines
              luxury aesthetics with futuristic performance.

            </p>

            {/* Price */}
            <div className="text-4xl font-bold text-[#111827] mb-10">

              ₹{product.price}

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              {/* Add To Cart */}
              <button
                onClick={() => {
  addToCart(product);

  toast.success("Added to cart successfully");

  onClose();
}}
                className="flex-1 bg-[#111827] text-white py-4 rounded-2xl font-semibold hover:bg-[#C8A96B] transition duration-300"
              >

                Add To Cart

              </button>

              {/* Wishlist */}
              <button className="px-8 py-4 rounded-2xl border border-[#E7E5E4] font-semibold hover:bg-[#F5F5F4] transition">

                Wishlist

              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}