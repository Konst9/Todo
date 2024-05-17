import React from 'react';
import { BtnContained, BtnOutline } from '../../index';

interface FilterButtonProps {
  BtnText: string;
  currentFilter: string;
  filter: 'Все' | 'Активные' | 'Завершенные';
  onClick: () => void;
}

export function FilteredButton({ BtnText, currentFilter, filter, onClick }: FilterButtonProps) {
  return currentFilter === filter ? (
    <BtnContained BtnText={BtnText} onClick={onClick} />
  ) : (
    <BtnOutline BtnText={BtnText} onClick={onClick} />
  );
}