'use client';

import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { customTheme } from '../Auth/RegisterLogin/customTheme';
import Image from 'next/image';
import { MoveLeft } from 'lucide-react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

interface ForgotResetInterface {
  topText: string;
  bottomText: string;
}

const ForgotResetPasswordComponent = (props: ForgotResetInterface) => {
  const [resetPasswordActive, setResetPasswordActive] =
    React.useState<boolean>(true);
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

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
            {props.topText === 'Forgot password?' && <TextField
              id="standard-basic"
              label="Email address"
              variant="standard"
              style={{
                marginBottom: '20px',
                boxSizing: 'border-box',
              }}
              fullWidth={false}
            />}
            {props.topText === 'Reset your password' && (
              <TextField
                id="standard-basic"
                label="New Password"
                type={showPassword ? 'text' : 'password'}
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
            {props.topText === 'Reset your password' && (
              <TextField
                id="standard-basic"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
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
            {/* <FormHelperText
            id="my-helper-text"
            style={{
              color: '#BFBBB1',
              paddingTop: '10px',
              marginLeft: '0',
            }}
          >
            <Link href="/auth/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </FormHelperText> */}
          </FormControl>
        </ThemeProvider>
        <Button
          className={`${
            resetPasswordActive
              ? 'bg-mzGold hover:bg-[#daab2d] rounded'
              : 'bg-[#555249] hover:bg-[#555249] cursor-no-drop rounded'
          } sm:h-[38px] 3xl:h-[60px] text-mzLight 3xl:text-[30px] 3xl:mt-4`}
        >
          Reset password
        </Button>
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
