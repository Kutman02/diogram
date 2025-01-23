'use client';
import React from 'react';
import { usePeriodFilters } from '@/hooks/usePeriodSelection';

export default function PeriodSelection() {
  const { filters, setActiveMonth, setActiveQuarter } = usePeriodFilters();

  const handleShowResults = () => {
    alert('Показать результаты');
  };

  return (
    <div className="p-2 max-w-5xl mx-auto">
      {/* Период и Кварталы */}
      <div className="flex flex-wrap gap-1 items-center text-xs md:text-base lg:text-lg">
        <div className="flex flex-wrap items-center gap-5 p-1 rounded-md w-full sm:w-auto">
          <input
            type="date"
            className="border rounded-md px-2 py-1 focus:ring focus:ring-blue-500 w-36"
            defaultValue="2025-01-01"
          />
          <span className="text-gray-500 font-medium">По</span>
          <input
            type="date"
            className="border rounded-md px-2 py-1 focus:ring focus:ring-blue-500 w-36"
            defaultValue="2025-01-15"
          />
          <input
            type="number"
            className="border rounded-md px-2 py-1 focus:ring focus:ring-blue-500 w-24"
            defaultValue={2025}
          />
        </div>

        <div className="flex gap-1 justify-center w-full sm:w-auto flex-wrap sm:flex-nowrap">
          {['I', 'II', 'III', 'IV'].map((quarter, index) => (
            <button
              key={quarter}
              onClick={() => setActiveQuarter(index)}
              className={`border px-1 py-1 rounded ${
                filters.activeQuarter === index
                  ? 'bg-blue-100 border-blue-400 text-blue-700'
                  : 'bg-white text-gray-700'
              } hover:bg-gray-100 focus:ring focus:ring-blue-500`}>
              {quarter}
            </button>
          ))}
        </div>
      </div>

      {/* Месяцы */}
      <div className="mt-1 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-1 text-xs md:text-sm lg:text-base">
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
            className={`border px-1 py-1 rounded ${
              filters.activeMonth === index
                ? 'bg-blue-100 border-blue-400 text-blue-700'
                : 'bg-white text-gray-700'
            } hover:bg-gray-100 focus:ring focus:ring-blue-500`}>
            {month}
          </button>
        ))}
      </div>

      {/* Показать кнопку */}
      <div className="mt-1 flex justify-center">
        <button
          onClick={handleShowResults}
          className="border px-1 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-500 md:px-1 md:py-1 lg:px-8 lg:py-1">
          Показать
        </button>
      </div>
    </div>
  );
}
