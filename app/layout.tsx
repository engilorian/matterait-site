import MainLayout from '@/components/Layout';
import { Playfair_Display, Nunito } from '@next/font/google';

import '@/style/globals.css';
import '@/style/components.css';


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '700', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'Matterait / Traits of Matter',
  description: 'Explore the traits of matter with advanced tools and data.',
  keywords: ['materials', 'physics', 'data analysis'],
  icons: {
    icon: '/matterait.svg',
  },
  metadataBase: new URL('https://matterait.com'),
  openGraph: {
    title: 'Matterait',
    description: 'Explore the traits of matter with advanced tools and data.',
    url: 'https://matterait.com',
    siteName: 'Matterait',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Matterait Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matterait',
    description: 'Explore the traits of matter with advanced tools and data.',
    images: ['/og-image.png'],
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
