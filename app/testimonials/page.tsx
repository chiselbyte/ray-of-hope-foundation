import type { Metadata } from 'next';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsList from '@/components/testimonials/TestimonialsList';

export const metadata: Metadata = {
  title: 'Testimonials - Stories of Impact',
  description: 'Read inspiring testimonials from students, teachers, and communities whose lives have been transformed through EduHope\'s educational programs.',
  openGraph: {
    title: 'EduHope Testimonials - Stories of Impact',
    description: 'Read inspiring testimonials from students, teachers, and communities whose lives have been transformed through EduHope\'s educational programs.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'EduHope Testimonials'
      }
    ]
  }
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col items-center">
      <TestimonialsHero />
      <TestimonialsList />
    </div>
  );
}