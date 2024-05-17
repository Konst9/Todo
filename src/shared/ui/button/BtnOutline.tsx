import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  BtnText: string;
  onClick?: () => void;
}
export function BtnOutline( { BtnText, onClick }: ButtonProps ) {
  const buttonStyle = {
    borderColor: "teal",
    color: "teal",
  }
  return (
    <div>
      <Button variant="outlined" style={buttonStyle} onClick={onClick}>{BtnText}</Button>
    </div>
  );
}