import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  BtnText: string;
  onClick?: () => void;
}
export function BtnContained( { BtnText, onClick }: ButtonProps ) {
  const buttonStyle = {
    backgroundColor: "teal",
    color: "white",
  }

  return (
    <div>
      <Button variant="contained" style={buttonStyle} onClick={onClick}>{BtnText}</Button>
    </div>
  );
}