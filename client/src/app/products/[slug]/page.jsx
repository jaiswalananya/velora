"use client";

import Image from "next/image";
import products from "../../../data/products";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCart } from "../../../context/CartContext";
import { useParams } from "next/navigation";

export default function ProductPage() {

  const params = useParams();

  const slug = params.slug;

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAF9] px-6 lg:px-16 py-12">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            {/* Main Image */}
            <div className="relative h-[520px] rounded-[36px] overflow-hidden bg-gradient-to-br from-[#F5F5F4] via-[#E7E5E4] to-[#D6D3D1]">

              {/* Glow */}
              <div className="absolute top-16 left-16 w-52 h-52 rounded-full bg-[#C8A96B]/20 blur-3xl z-10" />

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-10 z-20"
              />

            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 mt-5">

              {[1, 2, 3].map((item) => (

                <div
                  key={item}
                  className="relative h-[110px] rounded-[24px] overflow-hidden bg-white border border-[#E7E5E4]"
                >

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* Category */}
            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs font-semibold mb-4">

              {product.category}

            </p>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#111827]">

              {product.name}

            </h1>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">

              <div className="flex items-center gap-1 text-[#C8A96B] text-lg">

                ★ ★ ★ ★ ★

              </div>

              <span className="text-gray-500 text-base">
                4.9 (2,148 reviews)
              </span>

            </div>

            {/* Description */}
            <p className="mt-7 text-lg leading-7 text-gray-600">

              Experience next-generation premium technology
              engineered for luxury, performance, and intelligent
              everyday experiences designed for modern lifestyles.

            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-2 gap-4">

              {[
                "AI Enhanced",
                "Premium Build",
                "Fast Connectivity",
                "Luxury Design",
              ].map((feature) => (

                <div
                  key={feature}
                  className="rounded-2xl border border-[#E7E5E4] bg-white px-4 py-3 text-sm font-medium text-[#111827]"
                >

                  ✦ {feature}

                </div>

              ))}

            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">

              <h2 className="text-4xl font-bold text-[#111827]">

                ₹{product.price}

              </h2>

              <span className="text-xl text-gray-400 line-through">

                ₹99,999

              </span>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">

              {/* Add To Cart */}
              <button
                onClick={() => {
                  addToCart(product);

                  toast.success("Added to cart");
                }}
                className="flex-1 py-4 rounded-2xl bg-[#111827] text-white font-semibold hover:bg-[#C8A96B] transition duration-300"
              >

                Add To Cart

              </button>

              {/* Wishlist */}
              <button className="px-8 py-4 rounded-2xl border border-[#E7E5E4] bg-white font-semibold hover:bg-[#F5F5F4] transition">

                Wishlist

              </button>

            </div>

            {/* Delivery */}
            <div className="mt-8 rounded-[28px] bg-white border border-[#E7E5E4] p-5">

              <div className="grid sm:grid-cols-3 gap-5">

                <div>

                  <p className="text-sm text-gray-500">
                    Delivery
                  </p>

                  <h4 className="mt-1 font-semibold text-[#111827]">
                    Free Shipping
                  </h4>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Warranty
                  </p>

                  <h4 className="mt-1 font-semibold text-[#111827]">
                    2 Years
                  </h4>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Returns
                  </p>

                  <h4 className="mt-1 font-semibold text-[#111827]">
                    7 Days
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SPECIFICATIONS */}
        <section className="mt-16">

          <div className="mb-7">

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs font-semibold mb-2">

              Technical Details

            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">

              Specifications

            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              ["Battery", "40 Hours"],
              ["Connectivity", "Bluetooth 5.3"],
              ["Weight", "240g"],
              ["Warranty", "2 Years"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="rounded-[24px] border border-[#E7E5E4] bg-white p-5"
              >

                <p className="text-sm text-gray-500 mb-2">
                  {title}
                </p>

                <h4 className="text-lg font-bold text-[#111827]">
                  {value}
                </h4>

              </div>

            ))}

          </div>

        </section>

        {/* REVIEWS */}
        <section className="mt-16">

          <div className="mb-7">

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs font-semibold mb-2">

              Customer Feedback

            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">

              Reviews & Ratings

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-5">

            {[
              {
                name: "Aarav Sharma",
                review:
                  "Exceptional quality and premium finish. The audio experience is incredible.",
              },
              {
                name: "Priya Mehta",
                review:
                  "Beautiful design and amazing performance. Feels extremely premium.",
              },
              {
                name: "Rohan Kapoor",
                review:
                  "Battery life and intelligent features exceeded expectations.",
              },
            ].map((review) => (

              <div
                key={review.name}
                className="rounded-[24px] border border-[#E7E5E4] bg-white p-5"
              >

                <div className="text-[#C8A96B] text-lg mb-3">

                  ★★★★★

                </div>

                <p className="text-gray-600 leading-7">

                  {review.review}

                </p>

                <div className="mt-5">

                  <h4 className="font-bold text-[#111827]">

                    {review.name}

                  </h4>

                  <p className="text-sm text-gray-500 mt-1">

                    Verified Purchase

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* RELATED PRODUCTS */}
        <section className="mt-16 mb-8">

          <div className="mb-7">

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs font-semibold mb-2">

              Recommended

            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">

              You May Also Like

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {products
              .filter((item) => item.id !== product.id)
              .map((item) => (

                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                >

                  <div className="rounded-[28px] overflow-hidden border border-[#E7E5E4] bg-white hover:shadow-xl transition duration-300 cursor-pointer">

                    {/* Image */}
                    <div className="relative h-[240px] bg-gradient-to-br from-[#F5F5F4] via-[#E7E5E4] to-[#D6D3D1]">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-5"
                      />

                    </div>

                    {/* Content */}
                    <div className="p-5">

                      <p className="text-sm text-[#C8A96B] font-semibold mb-2">

                        {item.category}

                      </p>

                      <h3 className="text-xl font-bold text-[#111827] leading-snug">

                        {item.name}

                      </h3>

                      <div className="mt-4 flex items-center justify-between">

                        <span className="text-xl font-bold text-[#111827]">

                          ₹{item.price}

                        </span>

                        <button className="px-4 py-2 rounded-xl bg-[#111827] text-white text-sm hover:bg-[#C8A96B] transition">

                          View

                        </button>

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}