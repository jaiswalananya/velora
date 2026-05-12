"use client";
import Container from "../ui/Container";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
export default function Navbar({
  onCartOpen,
  onSearchOpen,
}) {
    const { cartItems } = useCart();
  return (
    <header className="w-full sticky top-0 z-50 border-b border-[#E7E5E4] bg-[#FAFAF9]/80 backdrop-blur-xl">

      <Container>

        <nav className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
              Vel<span className="text-[#C8A96B]">ora</span>
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

            <a
              href="#"
              className="hover:text-[#C8A96B] transition duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="hover:text-[#C8A96B] transition duration-300"
            >
              Products
            </a>

            <a
              href="#"
              className="hover:text-[#C8A96B] transition duration-300"
            >
              Categories
            </a>

            <a
              href="#"
              className="hover:text-[#C8A96B] transition duration-300"
            >
              AI Assistant
            </a>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">

            <button
            onClick={onSearchOpen}
            className="text-2xl text-gray-700 hover:text-[#C8A96B] transition duration-300"
            >
              <FiSearch />
            </button>

            <button
            onClick={onCartOpen}
            className="relative text-2xl text-gray-700 hover:text-[#C8A96B] transition duration-300"
            >

            <FiShoppingCart />

            {/* Badge */}
            {cartItems.length > 0 && (

            <span className="absolute -top-2 -right-3 min-w-[22px] h-[22px] px-1 rounded-full bg-[#C8A96B] text-white text-[11px] font-bold flex items-center justify-center shadow-lg">

            {cartItems.length}

            </span>

            )}

            </button>

            <button className="text-2xl text-gray-700 hover:text-[#C8A96B] transition duration-300">
              <FiUser />
            </button>

          </div>

        </nav>

      </Container>

    </header>
  );
}