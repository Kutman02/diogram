//Страница "Замечания и предложения"

'use client';
import React from 'react';
import PeriodSelection from '@/components/PeriodSelection';

export default function SuggestionsPage() {
  return (
    <div>
      <br />
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
        Страница Замечания и предложения
      </h1>
      <PeriodSelection />
    </div>
  );
}
