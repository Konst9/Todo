import React from 'react';
import Button from '@mui/material/Button';


interface ButtonProps {
  BtnText: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
}
export function BtnContained( { BtnText, onClick, size="medium", startIcon }: ButtonProps ) {
  const buttonStyle = {
    backgroundColor: "teal",
    color: "white",
  }

  return (
    <div>
      <Button size={size} startIcon={startIcon} variant="contained" style={buttonStyle} onClick={onClick}>{BtnText}</Button>
    </div>
  );
}