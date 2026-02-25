import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capsona | CapsoClaw — Your AI That Never Sleeps',
  description: 'Meet CapsoClaw by Capsona. Your personal AI super agent — plans your day, tackles tasks, follows up, and never sleeps. Everyone deserves a Jarvis.',
  openGraph: {
    title: 'Capsona | CapsoClaw — Your AI That Never Sleeps',
    description: 'Meet CapsoClaw by Capsona. Your personal AI super agent — plans your day, tackles tasks, follows up, and never sleeps.',
    images: [{ url: '/logocapsona.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capsona | CapsoClaw — Your AI That Never Sleeps',
    description: 'Meet CapsoClaw by Capsona. Your personal AI super agent — plans your day, tackles tasks, follows up, and never sleeps.',
    images: [{ url: '/logocapsona.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
