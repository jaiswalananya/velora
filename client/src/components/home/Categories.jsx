import Container from "../ui/Container";
import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-32">

      <Container>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div>

            <p className="text-[#C8A96B] font-semibold mb-4">
              Curated Collections
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827] max-w-3xl">

              Discover Categories Designed Around Your Lifestyle

            </h2>

          </div>

          <p className="text-lg text-gray-600 leading-8 max-w-lg">

            Explore AI-curated collections crafted for luxury,
            productivity, entertainment, and modern living.

          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Luxury Fashion */}
          <CategoryCard
            category={categories[0]}
            large={true}
          />

          {/* Smart Living */}
          <CategoryCard
            category={categories[1]}
            large={true}
          />

          {/* Left Stacked Cards */}
          <div className="flex flex-col gap-8">

            {/* Audio Experience */}
            <CategoryCard
              category={categories[2]}
            />

            {/* Minimal Workspace */}
            <CategoryCard
              category={categories[3]}
            />

          </div>

          {/* AI Commerce Card */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#111827] min-h-full p-10 flex flex-col justify-between shadow-2xl">

            {/* Glow */}
            <div className="absolute top-[-50px] right-[-50px] w-[240px] h-[240px] rounded-full bg-[#C8A96B]/20 blur-3xl"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-black opacity-90"></div>

            {/* Floating Glow */}
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10">

              <p className="text-[#C8A96B] uppercase text-sm tracking-[0.3em]">

                AI Commerce

              </p>

              <h3 className="mt-8 text-5xl leading-tight font-bold text-white">

                Personalized Shopping Powered By Intelligence

              </h3>

              <p className="mt-8 text-gray-300 leading-8 text-lg max-w-md">

                Experience conversational shopping,
                intelligent recommendations, and
                semantic product discovery powered by AI.

              </p>

            </div>

            {/* Bottom */}
            <div className="relative z-10 flex items-center justify-between mt-12">

              <button className="px-7 py-3 rounded-full bg-white text-[#111827] font-medium hover:bg-[#F5F5F4] transition shadow-lg">

                Explore AI

              </button>

              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white text-xl">

                ✦

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}