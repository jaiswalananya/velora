"use client";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import AISearch from "../components/home/AISearch";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/layout/Footer";
import ProductShowcase from "../components/home/ProductShowcase";
import Testimonials from "../components/home/Testimonials";
import SearchOverlay from "../components/search/SearchOverlay";

import CartDrawer from "../components/cart/CartDrawer";

export default function HomePage() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAF9]">


      <Navbar onCartOpen={() => setIsCartOpen(true)}
       onSearchOpen={() => setIsSearchOpen(true)}
      />

      <Hero />

      <Categories />

      <ProductShowcase />

      <AISearch />

      <FeaturedProducts />

      <Testimonials />

      <Footer />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </main>
  );
}