import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { teal } from '@mui/material/colors';

interface CheckBoxProps {
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckBox( {checked, onChange} : CheckBoxProps ) {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      size="small"
      sx={{
        color: teal[800],
        '&.Mui-checked': {
          color: teal[600],
        },
      }}
    />
  );
}