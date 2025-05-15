import type { Metadata } from 'next';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery - Our Impact in Pictures',
  description: 'View our gallery of images showcasing EduHope\'s educational programs, community impact, and the lives we\'ve transformed through education.',
  openGraph: {
    title: 'EduHope Gallery - Our Impact in Pictures',
    description: 'View our gallery of images showcasing EduHope\'s educational programs, community impact, and the lives we\'ve transformed through education.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'EduHope Gallery'
      }
    ]
  }
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
}