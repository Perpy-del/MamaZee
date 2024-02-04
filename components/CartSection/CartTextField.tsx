import React from 'react';
import { TextField } from '@mui/material';

interface CartTextProps {
    label: string;
    margin: string;
};

const CartTextField = (props: CartTextProps) => {

  return (
    <>
      <TextField
        id="standard-basic"
        label={props.label}
        variant="standard"
        style={{
          marginBottom: props.margin,
          boxSizing: 'border-box',
          color: '#FFFFFF',
        }}
        fullWidth
      />
    </>
  );
};

export default CartTextField;
