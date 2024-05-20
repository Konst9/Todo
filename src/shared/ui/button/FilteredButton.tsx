import React from 'react';
import { BtnTeal } from './BtnTeal';

interface FilterButtonProps {
  BtnText: string;
  currentFilter: string;
  filter: 'Все' | 'Активные' | 'Завершенные';
  onClick: () => void;
}

export function FilteredButton({ BtnText, currentFilter, filter, onClick }: FilterButtonProps) {
  return currentFilter === filter ? (
    <BtnTeal variant="contained" BtnText={BtnText} onClick={onClick} />
  ) : (
    <BtnTeal variant="outlined" BtnText={BtnText} onClick={onClick} />
  );
}