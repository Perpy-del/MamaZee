'use client';

import React from 'react';
import Image from 'next/image';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { customTheme } from './customTheme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { registerLoginData } from './data';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { SignupSchema } from '@/schemas/users';

interface LoginRegisterInterface {
  topText: string;
  bottomText: string;
  buttonText: 'Log in' | 'Sign up';
}

const RegisterLogin = (props: LoginRegisterInterface) => {
  const outerTheme = useTheme();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="bg-mzBlack h-screen md:w-[50vw] lg:pl-[80px] sm:pl-[10px] sm:pr-[20px] sm:w-full sm:pt-[15px] mdg:pt-[25px] mdl:pl-[50px] mdl:pr-[60px] mdl:pt-[10px] md:px-[30px] mdg:pr-[30px] overflow-hidden xxl:pt-[50px] 2xl:pt-[70px] 2xl:pl-[100px]">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/mz_black.svg"
          alt="mamazee logo"
          width={150}
          height={72}
          className="sm:w-[50%] mdl:w-[150px] md:w-[100px] mdg:w-[150px]"
          priority
        />
      </Link>

      {/* lets get started */}
      <div className="flex flex-col mdg:pl-[50px] lg:pl-[0px] xl:pl-[50px] sm:pl-[10px] sm:w-full items-start mdg:pr-[50px] xl:w-[90%] 2xl:w-[87%] 2xl:pl-[150px]">
        {/* Top */}
        {props.buttonText === 'Sign up' ? (
          <>
            <h1 className="text-[#AC8005] mdg:text-[20px] xl:text-[25px] md:text-[18px] sm:text-[18px] font-medium sm:pt-7 md:pt-4 lg:pt-7 xxl:pt-48 mdl:text-[25px]">
              {props.topText} <span className="block">{props.bottomText}</span>
            </h1>
            <div className="flex items-center gap-3 mx-auto mt-5 sm:w-full">
              {registerLoginData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="md:bg-mzTextBlack sm:bg-mzBlack border border-[#504E48] border-solid rounded md:w-[95px] sm:w-1/4 h-[40px] md:hover:bg-mzBlack inline-flex items-center justify-center cursor-pointer"
                    title={`Log in with ${data.title}`}
                  >
                    <button>
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={data.size}
                        height={data.size}
                        priority
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-[#AC8005] mdg:text-[20px] xl:text-[25px] md:text-[18px] sm:text-[18px] font-medium sm:pt-7 md:pt-4 lg:pt-7 xxl:pt-48 mdl:text-[25px]">
              {props.topText} <span className="block">{props.bottomText}</span>
            </h1>
            <div className="flex items-center gap-3 mx-auto mt-5 sm:w-full">
              {registerLoginData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="md:bg-mzTextBlack sm:bg-mzBlack border border-[#504E48] border-solid rounded md:w-[95px] sm:w-1/4 h-[40px] md:hover:bg-mzBlack inline-flex items-center justify-center cursor-pointer"
                    title={`Log in with ${data.title}`}
                  >
                    <button>
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={data.size}
                        height={data.size}
                        priority
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {/* OR */}
        <div className="w-full flex items-center justify-between md:mt-[30px] lg:mt-[60px] sm:mt-[30px] xxl:mt-[100px]">
          <div className="bg-[#504E48] h-[1px] w-[45%]"></div>
          <span className="text-[#78756C] xxl:text-[24px]"> Or </span>
          <div className="bg-[#504E48] h-[1px] w-[45%]"></div>
        </div>
        {/* Bottom */}
        <div>
          <form className="lg:mt-[40px] md:mt-[10px] sm:mt-[10px] sm:w-[85vw] md:w-[41vw] xl:w-[400px] mdg:w-[33vw] lg:w-[35vw] mdm:w-[89vw] mdl:w-[80vw] xxl:w-[31vw]">
            <ThemeProvider theme={customTheme(outerTheme)}>
              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  label="Email address"
                  variant="standard"
                  style={{
                    marginBottom: '20px',
                    boxSizing: 'border-box',
                  }}
                  fullWidth={false}
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="standard"
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
                <FormHelperText
                  id="my-helper-text"
                  style={{
                    color: '#BFBBB1',
                    paddingTop: '10px',
                    marginLeft: '0',
                  }}
                >
                  <Link
                    href="/auth/forgot-password"
                    className="hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </FormHelperText>
              </FormControl>
            </ThemeProvider>
          </form>
        </div>{' '}
        {props.buttonText === 'Sign up' ? (
          <div className="w-full text-center">
            <Button
              variant="mzvariant"
              className="sm:h-10 2xl:h-12 rounded mt-[20px] mb-[10px] sm:text-[16px] 2xl:text-[20px] w-full text-mzLight"
            >
              Sign up
            </Button>
            <h4 className="text-[#BFBBB1] sm:text-[14px] 2xl:text-[20px]">
              Already have an account?{' '}
              <span className="text-mzTextLight hover:underline">
                <Link href="/auth/login">Log in</Link>
              </span>
            </h4>
          </div>
        ) : (
          <div className="w-full text-center sm:pt-[0px] xl:pt-[10px]">
            <Button
              variant="mzvariant"
              className="sm:h-10 2xl:h-12 rounded mt-[20px] mb-[10px] sm:text-[16px] 2xl:text-[20px] w-full text-mzLight"
            >
              Log in
            </Button>
            <h4 className="text-[#BFBBB1] sm:text-[14px] 2xl:text-[20px]">
              Don’t have an account?{' '}
              <span className="text-mzTextLight hover:underline">
                <Link href="/auth/signup">Sign up</Link>
              </span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterLogin;
