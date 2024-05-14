import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import MamazeeContextProvider from '@/context/MamaZeeContext';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MamaZee Hair World',
  description:
    'Natural and organic hair products to give your hair that shine it needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <MamazeeContextProvider>{children}</MamazeeContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
