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
    <header className="h-16 flex items-center px-4 md:px-6 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg relative z-10 w-full">
      {/* Кнопка открытия сайдбара */}
      <button
        className="md:hidden text-white mr-4 hover:text-indigo-200 transition duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar">
        ☰
      </button>

      {/* Логотип */}
      <Image src="/logo.png" alt="Лого" width={40} height={40} className="rounded-full" />

      {/* Текстовый заголовок */}
      {/*<span className="ml-4 text-white font-semibold text-lg hidden sm:block">Районный суд</span>*/}

      {/* Выбор языка */}
      <div className="ml-4 relative">
        <select
          className="bg-white text-indigo-600 py-1 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:ml-4 appearance-none"
          aria-label="Select language">
          <option value="ky">Кыргызча</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      {/* Профиль */}
      <div className="ml-auto flex items-center">
        <button
          onClick={toggleProfile}
          className="bg-white text-indigo-600 hover:bg-gray-100 transition duration-300 p-2 rounded-full shadow-md">
          <Image src="/profile-icon.png" alt="Профиль" width={30} height={30} />
        </button>

        {/* Информация о председателе */}
        <div
          className={`absolute top-16 right-4 bg-white md:bg-transparent text-indigo-600 md:text-white shadow-lg md:shadow-none rounded-md p-4 md:p-0 transition-all duration-300 ${
            isProfileVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } md:static md:opacity-100 md:scale-100 md:flex md:items-center md:ml-4`}>
          <div className="text-sm font-medium">
            <div>Председатель районного суда:</div>
            <div>Асанов Асан Асанович</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
