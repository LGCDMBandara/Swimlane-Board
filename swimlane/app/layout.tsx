// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata: Metadata = {
    title: 'Board App',
    description: 'Project Management Board',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-gray-50`}>{children}</body>
        </html>
    );
}