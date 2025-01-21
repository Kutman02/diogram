'use client';

import React, { useState } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer'; // Import the Footer component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-100">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />
        {/* Sidebar + Content */}
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} />

          {/* Main Content */}
          <main className="bg-gray-0 ml-0 md:ml-35 transition-all duration-300">{children}</main>
        </div>
        {/* Footer */}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
