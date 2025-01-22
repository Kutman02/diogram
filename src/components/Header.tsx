'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileVisible(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="h-16 flex items-center px-4 md:px-6 bg-blue-600 shadow-md relative z-10 w-full">
      {/* Burger button (mobile only) */}
      <button
        className="md:hidden text-white mr-4 hover:text-gray-200 transition duration-300"
        onClick={() => handleToggle(setIsSidebarOpen)}
        aria-label="Toggle sidebar">
        ☰
      </button>

      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-4" />

      {/* Horizontal menu (desktop only) */}
      <nav className="hidden md:flex space-x-6 text-sm text-white">
        <Link href="/" className="hover:bg-blue-700 p-2 rounded transition duration-300">
          Оценки
        </Link>
        <Link href="/suggestions" className="hover:bg-blue-700 p-2 rounded transition duration-300">
          Замечания и предложения
        </Link>
      </nav>

      {/* Language selector */}
      <select
        className="ml-auto bg-blue-600 text-white py-1 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-4 appearance-none"
        aria-label="Select language">
        <option value="ky">Кыргызча</option>
        <option value="ru">Русский</option>
      </select>

      {/* Profile */}
      <div className="relative" ref={profileRef}>
        <button
          onClick={() => handleToggle(setIsProfileVisible)}
          className="bg-white text-blue-600 hover:bg-gray- hover:shadow-md transition duration-300 p-2 rounded-full shadow-sm"
          aria-expanded={isProfileVisible}>
          <Image src="/profile-icon.png" alt="Profile" width={30} height={30} />
        </button>

        {isProfileVisible && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg p-4 transition-all duration-300">
            <div className="text-sm text-gray-600">
              <div>Председатель районного суда:</div>
              <div className="font-semibold">Асанов Асан Асанович</div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar (mobile only) */}
      {isSidebarOpen && (
        <aside
          ref={sidebarRef}
          className="fixed top-0 left-0 bg-white text-black w-64 h-full p-4 transition-transform duration-300 z-50 md:hidden">
          <button
            className="mb-4 text-black hover:text-gray-800"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar">
            ✕
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:bg-gray-400 p-2 rounded transition duration-300">
              Оценки
            </Link>
            <Link
              href="/suggestions"
              className="hover:bg-gray-400 p-2 rounded transition duration-300">
              Замечания и предложения
            </Link>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
