import React from 'react';
import Button from '@mui/material/Button';


interface ButtonProps {
  BtnText: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant: "contained" | "outlined"
}
export function BtnTeal({ BtnText, onClick, size="medium", startIcon, variant="outlined" }: ButtonProps ) {
  const buttonStyle = (variant === "contained")
    ? { backgroundColor: "teal", color: "white" }
    : { borderColor: "teal", color: "teal" };

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon}
      style={buttonStyle}
      onClick={onClick}
    >
      {BtnText}
    </Button>
  );
}