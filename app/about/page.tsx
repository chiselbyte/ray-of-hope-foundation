import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import Team from '@/components/about/Team';
import History from '@/components/about/History';
import Values from '@/components/about/Values';

export const metadata: Metadata = {
  title: 'About Us - Our Mission and Impact',
  description: 'Learn about EduHope\'s mission, history, and the dedicated team working to transform lives through education worldwide.',
  openGraph: {
    title: 'About EduHope - Our Mission and Impact',
    description: 'Learn about EduHope\'s mission, history, and the dedicated team working to transform lives through education worldwide.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'EduHope Team and Mission'
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
      <AboutMission />
      <Values />
      <History />
      <Team />
    </div>
  );
}