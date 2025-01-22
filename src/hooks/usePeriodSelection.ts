import { useState, useEffect } from 'react';

interface PeriodFilters {
  activeMonth: number | null;
  activeQuarter: number | null;
}

export const usePeriodFilters = () => {
  const [filters, setFilters] = useState<PeriodFilters>(() => {
    // Загружаем сохраненные значения из localStorage при загрузке компонента
    const savedMonth = localStorage.getItem('activeMonth');
    const savedQuarter = localStorage.getItem('activeQuarter');

    return {
      activeMonth: savedMonth ? Number(savedMonth) : 0, // Январь по умолчанию
      activeQuarter: savedQuarter ? Number(savedQuarter) : 0, // I квартал по умолчанию
    };
  });

  useEffect(() => {
    localStorage.setItem('activeMonth', String(filters.activeMonth));
    localStorage.setItem('activeQuarter', String(filters.activeQuarter));
  }, [filters]);

  const setActiveMonth = (month: number | null) => {
    setFilters((prev) => ({ ...prev, activeMonth: month }));
  };

  const setActiveQuarter = (quarter: number | null) => {
    setFilters((prev) => ({ ...prev, activeQuarter: quarter }));
  };

  return {
    filters,
    setActiveMonth,
    setActiveQuarter,
  };
};
