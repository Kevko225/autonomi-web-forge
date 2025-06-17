
import { code, settings, monitor } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IT Professional &
            <span className="text-blue-600 block">Infrastructure Expert</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building autonomous, privacy-focused technology ecosystems with custom applications and self-hosted infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <code className="text-blue-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">Full-Stack Development</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <settings className="text-blue-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">Self-Hosted Infrastructure</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <monitor className="text-blue-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">Privacy & Autonomy</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Learn More About My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
