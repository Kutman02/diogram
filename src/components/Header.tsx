import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <header className="h-16 flex items-center px-6 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
      <button
        className="md:hidden text-white mr-4 hover:text-indigo-200 transition duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar">
        ☰
      </button>
      <Image src="/logo.png" alt="Лого" width={40} height={40} className="rounded-full" />
      <span className="ml-4 text-white font-semibold text-lg">Кыр/Рус</span>

      <div className="ml-auto flex items-center">
        {/* Кнопка профиля */}
        <button
          onClick={toggleProfile}
          className="bg-white text-indigo-600 hover:bg-gray-100 transition duration-300 ml-4 p-2 rounded-full shadow-md">
          <Image src="/profile-icon.png" alt="Профиль" width={30} height={30} />
        </button>

        {/* Информация о председателе */}
        <div
          className={`ml-4 text-white text-sm font-medium ${
            isProfileVisible ? 'block' : 'hidden'
          } md:block`}>
          <div>Председатель районного суда:</div>
          <div>Асанов Асан Асанович</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
