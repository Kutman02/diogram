'use client';
import React from 'react';
import PeriodSelector from '@/components/PeriodSelection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <br />
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
        Оценка деятельности районного суда за период
      </h1>
      <PeriodSelector />
      <Footer />
    </div>
  );
}
