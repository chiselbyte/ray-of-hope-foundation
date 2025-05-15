import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Empowering Communities Through Education
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            We believe every child deserves access to quality education regardless of their background or circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
            <Link 
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;