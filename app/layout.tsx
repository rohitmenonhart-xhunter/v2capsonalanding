import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Capsona | The Deep Signal',
  description: 'Your Mac\'s AI Voice Assistant. Speak directly into any app, instantly.',
  openGraph: {
    title: 'Capsona | The Deep Signal',
    description: 'Your Mac\'s AI Voice Assistant. Speak directly into any app, instantly.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capsona | The Deep Signal',
    description: 'Your Mac\'s AI Voice Assistant. Speak directly into any app, instantly.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
