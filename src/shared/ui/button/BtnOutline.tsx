import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  BtnText: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
}
export function BtnOutline( { BtnText, onClick, size="medium", startIcon }: ButtonProps ) {
  const buttonStyle = {
    borderColor: "teal",
    color: "teal",
  }
  return (
    <div>
      <Button size={size} startIcon={startIcon} variant="outlined" style={buttonStyle} onClick={onClick}>{BtnText}</Button>
    </div>
  );
}