import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Purecae | Exclusive Jewelry Collection',
  description: 'Discover our exclusive collection of handcrafted jewelry made with premium materials. Elegant designs for every occasion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  );
} 