"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg",
    alt: "Students in a classroom",
    category: "Classrooms"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
    alt: "Teacher with students",
    category: "Teaching"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
    alt: "School building exterior",
    category: "Schools"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
    alt: "Students reading books",
    category: "Students"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
    alt: "Teacher training workshop",
    category: "Training"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/8423214/pexels-photo-8423214.jpeg",
    alt: "Community meeting",
    category: "Community"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg",
    alt: "Children using computers",
    category: "Technology"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg",
    alt: "School construction project",
    category: "Construction"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/8473365/pexels-photo-8473365.jpeg",
    alt: "Students doing activities",
    category: "Activities"
  }
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{image.category}</p>
                  <p className="text-sm text-gray-200">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-screen">
              <button 
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;