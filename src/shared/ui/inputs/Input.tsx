import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextField = styled(TextField)({
  width: '800px',
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'teal',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'teal',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'teal',
    },
    '& input': {
      color: 'teal',
    },
  },
});
export function Input( { value, onChange }: InputProps ) {

  return (
    <div>
      <StyledTextField
        label="Новая заметка..."
        id="outlined-size-small"
        size="small"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}