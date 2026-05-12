"use client";

import { useState } from "react";

import ProductModal from "../product/ProductModal";
import Container from "../ui/Container";
import products from "../../data/products";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-24">

      <Container>

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>

            <p className="text-[#C8A96B] font-semibold uppercase tracking-[0.3em] text-sm">

              Trending Products

            </p>

            <h2 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight text-[#111827]">

              Featured Collection

            </h2>

          </div>

          <p className="text-base lg:text-lg leading-8 text-gray-600 max-w-xl">

            Explore AI-curated premium products
            tailored for productivity, luxury,
            entertainment, and modern lifestyles.

          </p>

        </div>

        {/* Products */}
        <div className="flex flex-col gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              onClick={() => {
  console.log(product);
  setSelectedProduct(product);
}}
              className="cursor-pointer"
            >

              <ProductCard product={product} />

            </div>

          ))}

        </div>

      </Container>

      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
}