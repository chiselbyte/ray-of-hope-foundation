import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">EduHope</h3>
            <p className="text-gray-300 mb-4">
              Empowering communities through quality education and creating opportunities for a better future.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <FooterLink href="/#">School Support</FooterLink>
              <FooterLink href="/#">Teacher Training</FooterLink>
              <FooterLink href="/#">Scholarship Program</FooterLink>
              <FooterLink href="/#">Community Learning</FooterLink>
              <FooterLink href="/#">Digital Literacy</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Education Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@eduhope.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EduHope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
    >
      {icon}
    </a>
  );
};

export default Footer;