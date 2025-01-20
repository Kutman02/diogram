'use client';
import React, { useState } from 'react';

export default function Home() {
  const [activeMonth, setActiveMonth] = useState<number | null>(0); // Январь по умолчанию
  const [activeQuarter, setActiveQuarter] = useState<number | null>(0); // I квартал по умолчанию

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
        Оценка деятельности районного суда за период
      </h1>

      {/* Период */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <input
          type="date"
          className="col-span-4 sm:col-span-3 border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="2025-01-01"
        />
        <span className="hidden sm:block col-span-1 text-center text-gray-600">По</span>
        <input
          type="date"
          className="col-span-4 sm:col-span-3 border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="2025-01-15"
        />
        <input
          type="number"
          className="col-span-4 sm:col-span-2 border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="2025"
        />
      </div>

      {/* Кварталы */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
        {['I', 'II', 'III', 'IV'].map((quarter, index) => (
          <button
            key={quarter}
            onClick={() => setActiveQuarter(index)}
            className={`border border-gray-300 px-6 py-2 rounded-lg ${
              activeQuarter === index
                ? 'bg-blue-100 border-blue-400 text-blue-700'
                : 'bg-white text-gray-800'
            } hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base`}>
            {quarter}
          </button>
        ))}
      </div>

      {/* Месяцы */}
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-14 gap-2">
        {[
          'январь',
          'февраль',
          'март',
          'апрель',
          'май',
          'июнь',
          'июль',
          'август',
          'сентябрь',
          'октябрь',
          'ноябрь',
          'декабрь',
        ].map((month, index) => (
          <button
            key={index}
            onClick={() => setActiveMonth(index)}
            className={`border border-gray-300 px-3 py-2 rounded-lg text-sm sm:text-base ${
              activeMonth === index
                ? 'bg-blue-100 border-blue-400 text-blue-700'
                : 'bg-white text-gray-800'
            } hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
