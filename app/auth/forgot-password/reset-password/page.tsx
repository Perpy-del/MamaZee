import ForgotResetPasswordComponent from '@/components/Auth/ForgotResetPasswordComponent';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FormHelperText, TextField } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { customTheme } from '../../../../components/Auth/RegisterLogin/customTheme';
import Link from 'next/link';

type Props = {};

const ResetPasswordPage = (props: Props) => {
  return (
    <>
      <ForgotResetPasswordComponent topText={'Reset your password'} bottomText={'Enter your new password'} />
    </>
  );
};

export default ResetPasswordPage;
