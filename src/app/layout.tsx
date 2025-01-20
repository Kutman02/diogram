'use client';

import React, { useState } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Link from 'next/link';

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
          {/* Sidebar */}
          <aside
            className={`bg-gradient-to-b from-blue-600 to-indigo-600 w-48 flex flex-col p-4 transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 transition-transform duration-300 fixed md:static h-full md:h-auto z-50`}>
            <Link
              href="/"
              className="py-2 px-4 text-left text-white rounded mb-2 hover:bg-indigo-500 transition-colors">
              Оценки
            </Link>
            <a
              href="/suggestions"
              className="py-2 px-4 text-left text-white rounded hover:bg-indigo-500 transition-colors">
              Замечания и предложения
            </a>
          </aside>

          {/* Main Content */}
          <main className=" bg-gray-0  ml-0 md:ml-48 transition-all duration-300">{children}</main>
        </div>
      </body>
    </html>
  );
}
