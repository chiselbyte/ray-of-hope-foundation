import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Mission from '@/components/home/Mission';
import Programs from '@/components/home/Programs';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  description: 'EduHope transforms lives through education. Join us in our mission to provide quality education to underserved communities worldwide.',
  openGraph: {
    title: 'EduHope - Empowering Through Education',
    description: 'EduHope transforms lives through education. Join us in our mission to provide quality education to underserved communities worldwide.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'EduHope - Transforming Lives Through Education'
      }
    ]
  }
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Mission />
      <Programs />
      <Stats />
      <CTA />
    </div>
  );
}