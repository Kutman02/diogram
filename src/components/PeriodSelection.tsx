'use client';
import React from 'react';
import { usePeriodFilters } from '@/hooks/usePeriodSelection';

export default function PeriodSelection() {
  const { filters, setActiveMonth, setActiveQuarter } = usePeriodFilters();

  const handleShowResults = () => {
    alert('Показать результаты');
  };

  return (
    <div className="p-3 max-w-3xl mx-auto md:p-6 lg:p-8">
      {/* Период */}
      <div className="grid grid-cols-3 gap-2 items-center text-sm md:text-base lg:text-lg">
        <input
          type="date"
          className="border rounded px-2 py-1 focus:ring focus:ring-blue-500 md:px-3 md:py-2 lg:px-4 lg:py-3"
          defaultValue="2025-01-01"
        />
        <span className="text-center text-gray-500">По</span>
        <input
          type="date"
          className="border rounded px-2 py-1 focus:ring focus:ring-blue-500 md:px-3 md:py-2 lg:px-4 lg:py-3"
          defaultValue="2025-01-15"
        />
        <input
          type="number"
          className="col-span-3 border rounded px-2 py-1 mt-2 focus:ring focus:ring-blue-500 md:px-3 md:py-2 lg:px-4 lg:py-3"
          defaultValue={2025}
        />
      </div>

      {/* Кварталы */}
      <div className="mt-4 flex flex-wrap gap-1 justify-center text-xs md:text-sm lg:text-base">
        {['I', 'II', 'III', 'IV'].map((quarter, index) => (
          <button
            key={quarter}
            onClick={() => setActiveQuarter(index)}
            className={`border px-3 py-1 rounded ${
              filters.activeQuarter === index
                ? 'bg-blue-100 border-blue-400 text-blue-700'
                : 'bg-white text-gray-700'
            } hover:bg-gray-100 focus:ring focus:ring-blue-500 md:px-4 md:py-2 lg:px-5 lg:py-3`}>
            {quarter}
          </button>
        ))}
      </div>

      {/* Месяцы */}
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-4 gap-1 text-xs md:text-sm lg:text-base">
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
            className={`border px-2 py-1 rounded ${
              filters.activeMonth === index
                ? 'bg-blue-100 border-blue-400 text-blue-700'
                : 'bg-white text-gray-700'
            } hover:bg-gray-100 focus:ring focus:ring-blue-500 md:px-3 md:py-2 lg:px-4 lg:py-3`}>
            {month}
          </button>
        ))}
      </div>

      {/* Показать кнопку */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleShowResults}
          className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-500 md:px-6 md:py-3 lg:px-8 lg:py-4">
          Показать
        </button>
      </div>
    </div>
  );
}
