import Container from "../ui/Container";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-violet-600">
              Velora
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Categories</a>
            <a href="#">AI Assistant</a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="text-2xl text-gray-700">
              <FiShoppingCart />
            </button>

            <button className="text-2xl text-gray-700">
              <FiUser />
            </button>
          </div>

        </nav>
      </Container>
    </header>
  );
}