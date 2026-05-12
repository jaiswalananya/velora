import Container from "../ui/Container";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Product Designer",
    review:
      "The AI recommendations actually understood my style better than most ecommerce platforms. The experience feels premium and intelligent.",
    initials: "AM",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Content Creator",
    review:
      "Velora makes shopping feel futuristic. The interface, recommendations, and product discovery are incredibly smooth.",
    initials: "RS",
  },
  {
    id: 3,
    name: "Kabir Verma",
    role: "Software Engineer",
    review:
      "I genuinely loved the luxury aesthetic and AI-powered search experience. Everything feels curated personally for me.",
    initials: "KV",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#FAFAF9] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C8A96B]/10 blur-3xl rounded-full" />

      <Container>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">

          <p className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            User Experiences
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6">
            What Premium Shoppers Say About Velora
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            Discover how Velora combines artificial intelligence,
            luxury design, and personalized recommendations to
            redefine the ecommerce experience.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-8">

                {/* Profile */}
                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-[#111827] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.initials}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#111827]">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* Quote */}
                <div className="text-6xl text-[#C8A96B]/20 font-serif leading-none">
                  "
                </div>

              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">

                <FiStar className="fill-[#C8A96B] text-[#C8A96B]" />
                <FiStar className="fill-[#C8A96B] text-[#C8A96B]" />
                <FiStar className="fill-[#C8A96B] text-[#C8A96B]" />
                <FiStar className="fill-[#C8A96B] text-[#C8A96B]" />
                <FiStar className="fill-[#C8A96B] text-[#C8A96B]" />

              </div>

              {/* Review */}
              <p className="text-gray-600 text-lg leading-9">
                {item.review}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}