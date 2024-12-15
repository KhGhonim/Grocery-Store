import TeamSection from "../_components/AboutUsPage/TeamSection";
import Values from "../_components/AboutUsPage/Values";
import Story from "../_components/AboutUsPage/Story";
import Stats from "../_components/AboutUsPage/Stats";
import OurValues from "../_components/AboutUsPage/OurValues";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Your Neighborhood Market
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Bringing fresh, quality products to your table since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Values Section */}
      <Values />

      {/* Story Section */}
      <Story />

      {/* Team Section */}
      <TeamSection />

      {/* Our Values */}
      <OurValues />
    </div>
  );
}
