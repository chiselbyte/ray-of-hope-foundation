// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
//             Empowering Communities Through Education
//           </h1>
//           <p className="text-lg md:text-xl opacity-90 mb-8">
//             We believe every child deserves access to quality education regardless of their background or circumstances.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               href="/about"
//               className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
//             >
//               Learn More
//             </Link>
//             <Link 
//               href="/contact"
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
//             >
//               Get Involved
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
//     </section>
//   );
// };

// export default Hero;


import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#1a0f4f] text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Lives Through{' '}
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We are a team of dedicated educators and volunteers working to provide quality education to underserved communities worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate Us
              </Link>
              <a
                href="https://www.youtube.com/@arayofhope8580"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/20 hover:bg-white/10 transition-colors duration-300"
              >
                <Play size={20} className="text-blue-400" />
                Watch Video
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] w-full">
              <Image
                src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg"
                alt="Education Impact"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-3xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;