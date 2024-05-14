'use client';

import React from 'react';
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { customTheme } from '../Auth/RegisterLogin/customTheme';
import Image from 'next/image';
import { MoveLeft, AlertTriangle } from 'lucide-react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useMamazeeHook } from '@/hooks/useMamazeeHook';

interface ForgotResetInterface {
  topText: string;
  bottomText: string;
}

const ForgotResetPasswordComponent = (props: ForgotResetInterface) => {
  const {
    resetPasswordActive,
    forgotPasswordEmail,
    handleForgotPasswordEmail,
    isEmailValid,
    loading,
    handleNewPassword,
    handleForgotPassword,
    handleConfirmPassword,
    handleResetPassword,
    isPasswordValid,
    newPassword,
    confirmPassword,
    passwordDoesNotMatch
  } = useMamazeeHook();
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="bg-mzBlack h-screen sm:p-5 md:px-[80px] md:py-[30px] 3xl:px-[200px] 3xl:py-[100px]">
      {/* Logo */}

      <Link href="/">
        <Image
          src="/mz_black.svg"
          alt="mamazee logo"
          width={85}
          height={42}
          className="3xl:w-1/6"
        />
      </Link>
      <div className="mdl:w-[60%] md:w-1/2 mx-auto flex flex-col justify-center h-[80%]">
        <h1 className="text-[#AC8005] sm:text-[18px] mdl:text-[25px] 3xl:text-[60px] 3xl:pb-4 font-semibold">
          {props.topText}
        </h1>
        <h3 className="text-[#BFBBB1] sm:text-sm 3xl:text-[33px] sm:pb-[66px] 3xl:pb-[100px]">
          {props.bottomText}
        </h3>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <FormControl fullWidth>
            {props.topText === 'Forgot password?' && (
              <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
                value={forgotPasswordEmail}
                onChange={handleForgotPasswordEmail}
                style={{
                  marginBottom: '20px',
                  boxSizing: 'border-box',
                }}
                fullWidth={false}
              />
            )}
            {!isEmailValid && (
              <FormHelperText
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '5px',
                  color: '#E59898',
                  marginTop: '5px',
                  marginLeft: '0',
                }}
              >
                <AlertTriangle size={15} />
                Please enter a valid email address
              </FormHelperText>
            )}
            {props.topText === 'Reset your password' && (
              <TextField
                id="standard-basic"
                label="New Password"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={handleNewPassword}
                variant="standard"
                style={{
                  marginBottom: '30px',
                  boxSizing: 'border-box',
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: '#504E48' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {!isPasswordValid && (
              <FormHelperText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#E59898',
                  marginTop: '5px',
                  marginLeft: '0',
                }}
              >
                <AlertTriangle size={40} />
                Password must be minimum eight characters containing at least an
                uppercase letter(e.g... A, B), a lowercase letter(e.g... a, z),
                a number(e.g... 1, 4, 6) and a symbol(e.g... @, #, $)
              </FormHelperText>
            )}
            {props.topText === 'Reset your password' && (
              <TextField
                id="standard-basic"
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={handleConfirmPassword}
                variant="standard"
                style={{
                  marginBottom: '30px',
                  boxSizing: 'border-box',
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: '#504E48' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {passwordDoesNotMatch && (
              <FormHelperText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#E59898',
                  margin: '5px 0',
                  marginLeft: '0',
                }}
              >
                <AlertTriangle size={15} />
                Passwords do not match. Please check that your Password and Confirm Password match.
              </FormHelperText>
            )}
          </FormControl>
        </ThemeProvider>
        {props.topText === 'Forgot password?' && (
          <Button
            className={`${
              resetPasswordActive
                ? 'bg-mzGold hover:bg-[#daab2d] rounded'
                : 'bg-[#555249] hover:bg-[#555249] cursor-no-drop rounded'
            } sm:h-[38px] 3xl:h-[60px] text-mzLight 3xl:text-[30px] 3xl:mt-4`}
            onClick={handleForgotPassword}
          >
            Reset password{' '}
            {loading && (
              <CircularProgress
                style={{ marginLeft: '20px', color: '#FFF' }}
                size={20}
              />
            )}
          </Button>
        )}
        {props.topText === 'Reset your password' && (
          <Button
            className={`${
              resetPasswordActive
                ? 'bg-mzGold hover:bg-[#daab2d] rounded'
                : 'bg-[#555249] hover:bg-[#555249] cursor-no-drop rounded'
            } sm:h-[38px] 3xl:h-[60px] text-mzLight 3xl:text-[30px] 3xl:mt-4`}
            onClick={handleResetPassword}
          >
            Reset password{' '}
            {loading && (
              <CircularProgress
                style={{ marginLeft: '20px', color: '#FFF' }}
                size={20}
              />
            )}
          </Button>
        )}
        <Link
          href="/auth/login"
          className="sm:mt-4 3xl:mt-10 flex items-center gap-4 hover:gap-2 hover:transition-all transform duration-1000 sm:w-[140px] 3xl:w-[250px]"
        >
          <MoveLeft className="text-[#BFBBB1]" />
          <h3 className="text-[#BFBBB1] sm:text-sm 3xl:text-[25px] hover:text-mzLight hover:font-semibold">
            Back to Log in
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default ForgotResetPasswordComponent;
