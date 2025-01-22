'use client';

import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Import the Footer component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-100">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className="bg-gray-0 transition-all duration-300">{children}</main>
        {/* Footer */}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
