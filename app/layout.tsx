import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eduhope.org'),
  title: {
    default: 'EduHope - Empowering Through Education',
    template: '%s | EduHope'
  },
  description: 'EduHope is an NGO dedicated to providing quality education to underserved communities worldwide. Join us in making education accessible to all.',
  keywords: ['education NGO', 'global education', 'educational charity', 'teacher training', 'school development', 'community education'],
  authors: [{ name: 'EduHope Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eduhope.org',
    siteName: 'EduHope',
    title: 'EduHope - Empowering Through Education',
    description: 'Join us in making quality education accessible to all. EduHope works globally to transform communities through education.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
        width: 1200,
        height: 630,
        alt: 'EduHope - Transforming Lives Through Education'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduHope - Empowering Through Education',
    description: 'Join us in making quality education accessible to all. EduHope works globally to transform communities through education.',
    images: ['https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://eduhope.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E40AF" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}