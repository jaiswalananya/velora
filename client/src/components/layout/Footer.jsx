import Container from "../ui/Container";
import Button from "../ui/Button";

import {
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white pt-14 pb-6">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#C8A96B]/10 blur-3xl"></div>

      <Container>

        {/* Top CTA */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-white/10">

          <div>

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs">

              Future of Commerce

            </p>

            <h2 className="mt-4 text-3xl lg:text-4xl leading-tight font-bold max-w-2xl">

              Experience Shopping Powered By Intelligence

            </h2>

          </div>

          <Button variant="gold">
            Join Velora
          </Button>

        </div>

        {/* Main Footer */}
        <div className="relative z-10 grid lg:grid-cols-5 gap-10 py-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold tracking-tight">

              Vel<span className="text-[#C8A96B]">ora</span>

            </h2>

            <p className="mt-5 text-gray-400 leading-7 max-w-md">

              Velora combines artificial intelligence,
              luxury design, and modern ecommerce
              experiences into one seamless platform.

            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">

              {[FiInstagram, FiTwitter, FiGithub, FiLinkedin].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white hover:text-[#111827] transition"
                  >
                    <Icon />
                  </button>
                )
              )}

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-base font-semibold">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">

              <a href="#" className="hover:text-white transition">
                Home
              </a>

              <a href="#" className="hover:text-white transition">
                Products
              </a>

              <a href="#" className="hover:text-white transition">
                Categories
              </a>

              <a href="#" className="hover:text-white transition">
                AI Assistant
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-base font-semibold">
              Company
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">

              <a href="#" className="hover:text-white transition">
                About
              </a>

              <a href="#" className="hover:text-white transition">
                Careers
              </a>

              <a href="#" className="hover:text-white transition">
                Privacy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms
              </a>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h4 className="text-base font-semibold">
              Newsletter
            </h4>

            <p className="mt-5 text-gray-400 leading-7 text-sm">

              Get AI-curated product drops and shopping insights.

            </p>

            <div className="mt-5">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white placeholder:text-gray-500"
              />

              <button className="mt-3 w-full rounded-xl bg-white text-[#111827] py-3 font-medium hover:bg-[#F5F5F4] transition">

                Subscribe

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-3 text-gray-500 text-sm">

          <p>
            © 2026 Velora. All rights reserved.
          </p>

          <p>
            Designed & Developed by Ananya Jaiswal
          </p>

        </div>

      </Container>

    </footer>
  );
}