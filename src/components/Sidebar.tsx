'use client';

import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-gradient-to-b from-blue-600 to-indigo-600 w-48 flex flex-col p-4 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 fixed md:static h-full md:h-auto z-50`}>
      <Link
        href="/"
        className="py-2 px-4 text-left text-white rounded mb-2 hover:bg-indigo-500 transition-colors">
        Оценки
      </Link>
      <Link
        href="/suggestions"
        className="py-2 px-4 text-left text-white rounded hover:bg-indigo-500 transition-colors">
        Замечания и предложения
      </Link>
    </aside>
  );
}
