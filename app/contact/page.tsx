import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import DonationInfo from '@/components/contact/DonationInfo';
import Map from '@/components/contact/Map';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact EduHope to learn more about our educational programs, volunteer opportunities, or how you can support our mission.',
  openGraph: {
    title: 'Contact EduHope - Get in Touch',
    description: 'Contact EduHope to learn more about our educational programs, volunteer opportunities, or how you can support our mission.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact EduHope'
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <ContactHero />
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <DonationInfo />
        <ContactForm />
        <ContactInfo />
        <Map />
      </div>
    </div>
  );
}