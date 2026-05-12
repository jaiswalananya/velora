import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      <Navbar />

      <section className="py-24">
        <Container>
          
          <div className="max-w-3xl">
            
            <p className="text-violet-600 font-semibold mb-4">
              AI-Powered Commerce Platform
            </p>

            <h1 className="text-6xl font-bold leading-tight text-[#111827]">
              Personalized Shopping Experience For Modern Consumers
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Discover smarter shopping with AI-powered recommendations,
              semantic product search, and a premium ecommerce experience.
            </p>

            <div className="mt-10 flex gap-5">
              
              <button className="px-8 py-4 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition">
                Explore Products
              </button>

              <button className="px-8 py-4 rounded-full border border-gray-300 bg-white font-medium hover:bg-gray-100 transition">
                AI Assistant
              </button>

            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}