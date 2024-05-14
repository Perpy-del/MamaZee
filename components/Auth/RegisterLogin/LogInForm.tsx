'use client'

import React from 'react';
import Image from 'next/image';
import {
  FormControl,
  FormHelperText,
  TextField,
  CircularProgress,
} from '@mui/material';
import { customTheme } from '@/components/Auth/RegisterLogin/customTheme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { AlertTriangle } from 'lucide-react';
// import { LoginRegisterInterface } from '@/interfaces/loginInterface';
import FormComponent from '@/components/Auth/RegisterLogin/Form';
import { useRouter } from 'next/navigation';
import { useMamazeeHook } from '@/hooks/useMamazeeHook';

const RegisterLogin = () => {
  const {email, password, handleEmail, handlePassword, handleLoginUser, isEmailValid, isPasswordValid, loading} = useMamazeeHook();

  const router = useRouter();
  const outerTheme = useTheme();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

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

      {/* Login form */}
      <FormComponent topText="It's nice to see you again." bottomText="Log in to Mamazee" buttonText={'Log in'} handleSubmit={handleLoginUser}>
      <div>
          <div className="lg:mt-[25px] md:mt-[10px] sm:mt-[10px] sm:w-[85vw] md:w-[41vw] xl:w-[400px] mdg:w-[33vw] lg:w-[35vw] mdm:w-[89vw] mdl:w-[80vw] xxl:w-[31vw]">
            <ThemeProvider theme={customTheme(outerTheme)}>
              <FormControl fullWidth>
                <div className="mb-5 w-full">
                  <TextField
                    id="email-address"
                    label="Email address"
                    value={email}
                    onChange={handleEmail}
                    variant="standard"
                    style={{
                      boxSizing: 'border-box',
                    }}
                    fullWidth
                  />
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
                </div>
                <TextField
                  id="password"
                  label="Password"
                  value={password}
                  onChange={handlePassword}
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
                    Password must be minimum eight characters containing at
                    least an uppercase letter(e.g... A, B), a lowercase
                    letter(e.g... a, z), a number(e.g... 1, 4, 6) and a
                    symbol(e.g... @, #, $)
                  </FormHelperText>
                )}
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
          </div>
        
        <div className="w-full text-center">
          <Button
            className={`sm:h-10 2xl:h-12 rounded mt-[20px] mb-[10px] sm:text-[16px] 2xl:text-[20px] w-full text-mzLight ${
              isEmailValid && isPasswordValid
                ? 'bg-mzGold font-bold text-mzLight hover:bg-[#daab2d] cursor-pointer'
                : 'text-mzLight font-bold bg-[#555249] hover:bg-[#555249] cursor-no-drop'
            }`}
            type="submit"
          >
            Log in{' '}
              {loading && (
                <CircularProgress
                  style={{ marginLeft: '20px', color: '#FFF' }}
                  size={20}
                />
              )}
          </Button>
          <h4 className="text-[#BFBBB1] sm:text-[14px] 2xl:text-[20px]">
            Already have an account?{' '}
            <span className="text-mzTextLight hover:underline">
              <Link href="/auth/signup">Sign up</Link>
            </span>
          </h4>
        </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default RegisterLogin;
