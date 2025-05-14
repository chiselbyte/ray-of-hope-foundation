import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you want to volunteer, donate, or spread the word, there are many ways to support our mission of providing quality education to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Involved <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link 
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;