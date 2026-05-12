"use client";

import Image from "next/image";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({
  isOpen,
  onClose,
}) {

  const {
    cartItems,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.price.replace(/,/g, "")),
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#FAFAF9] z-[9999] shadow-2xl transition duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E5E4]">

            <div>

              <p className="text-[#C8A96B] uppercase tracking-[0.22em] text-[10px] font-semibold mb-1">

                Shopping Cart

              </p>

              <h2 className="text-2xl font-bold text-[#111827]">

                Your Cart

              </h2>

            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl border border-[#E7E5E4] flex items-center justify-center hover:bg-[#111827] hover:text-white transition"
            >

              <FiX />

            </button>

          </div>

          {/* Empty State */}
          {cartItems.length === 0 && (

            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

              <div className="w-24 h-24 rounded-full bg-[#F5F5F4] flex items-center justify-center text-4xl mb-6">

                🛒

              </div>

              <h3 className="text-2xl font-bold text-[#111827] mb-3">

                Your cart is empty

              </h3>

              <p className="text-gray-500 leading-7 max-w-sm">

                Explore premium AI-curated products
                and add your favorites to cart.

              </p>

            </div>

          )}

          {/* Cart Items */}
          {cartItems.length > 0 && (

            <>
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

                {cartItems.map((item, index) => (

                  <div
                    key={index}
                    className="rounded-[24px] border border-[#E7E5E4] bg-white p-4"
                  >

                    <div className="flex gap-4">

                      {/* Image */}
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5F5F4] to-[#E7E5E4] shrink-0">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-3"
                        />

                      </div>

                      {/* Content */}
                      <div className="flex-1">

                        <p className="text-xs uppercase tracking-[0.18em] text-[#C8A96B] font-semibold mb-1">

                          {item.category}

                        </p>

                        <h3 className="text-lg font-semibold text-[#111827] leading-tight">

                          {item.name}

                        </h3>

                        <p className="mt-3 text-xl font-bold text-[#111827]">

                          ₹{item.price}

                        </p>

                        {/* Actions */}
                        <div className="mt-4 flex items-center justify-between">

                          {/* Quantity */}
                          <div className="flex items-center gap-3 rounded-xl border border-[#E7E5E4] px-3 py-2">

                            <button className="text-gray-500">

                              <FiMinus />

                            </button>

                            <span className="font-medium">

                              1

                            </span>

                            <button className="text-gray-500">

                              <FiPlus />

                            </button>

                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 hover:text-red-600 transition"
                          >

                            <FiTrash2 />

                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* Footer */}
              <div className="border-t border-[#E7E5E4] px-6 py-5 bg-white">

                {/* Subtotal */}
                <div className="flex items-center justify-between mb-5">

                  <p className="text-gray-500">
                    Subtotal
                  </p>

                  <h3 className="text-2xl font-bold text-[#111827]">

                    ₹{subtotal.toLocaleString()}

                  </h3>

                </div>

                {/* Checkout */}
                <button className="w-full py-4 rounded-2xl bg-[#111827] text-white font-semibold hover:bg-[#C8A96B] transition duration-300">

                  Proceed To Checkout

                </button>

              </div>
            </>
          )}

        </div>

      </div>
    </>
  );
}