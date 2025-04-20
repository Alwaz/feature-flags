import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { FeatureFlagProvider } from '@/context/feature-flag-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Feature Flags',
  description:
    'A Premium Course from Frontend Hire that teaches you how to build feature flags.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'dark'}>
      <body
        className={cn(
          'min-h-screen overflow-hidden font-sans antialiased',
          inter,
        )}
      >
        <Navbar />
        <FeatureFlagProvider>{children}</FeatureFlagProvider>
      </body>
    </html>
  );
}
