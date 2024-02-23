'use client';

import React, { FormEvent } from 'react';
import Image from 'next/image';
import {
  FormControl,
  FormHelperText,
  TextField,
  CircularProgress
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
import { LoginRegisterInterface } from '@/interfaces/loginInterface';
import { validateEmail, validatePassword } from '@/lib/utils';
import FormComponent from '@/components/Auth/RegisterLogin/Form';
import { useRouter } from 'next/navigation';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const RegisterLogin = (props: LoginRegisterInterface) => {
  const router = useRouter();
  const { toast } = useToast();
  const outerTheme = useTheme();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsPasswordValid(validatePassword(inputPassword));
  };

  const handleRegisterUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast({
        variant: "destructive",
        title: "Email and Password cannot be empty.",
        description: "Please enter a valid email address and password before you can login",
        action: <ToastAction className="" altText="Try again">Try again</ToastAction>,
      })
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        })
      });
      const responseData = await res.json();
      console.log("RESPONSE DATA: ", responseData);
      console.log("RESPONSE DATA STATUS: ", responseData?.status);
      setLoading(false);
      if (responseData.status === 200) {
        toast({
          variant: "success",
          title: "Account Created Successfully",
          description: "You have successfully created an account. Please log in!",
          action: <ToastAction className="" altText="Success">Log in</ToastAction>,
        })
        router.push("/auth/login");
      }
      if (responseData.status !== 200) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.message,
          action: <ToastAction className="" altText="Try again">Try again</ToastAction>,
        })
        return;
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction className="" altText="Try again">Try again</ToastAction>,
      })
    }
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
      <FormComponent
        topText="Let’s get you started."
        bottomText="Sign up on Mamazee"
        buttonText={'Sign up'}
        handleSubmit={handleRegisterUser}
      >
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
            Sign up {loading && <CircularProgress style={{marginLeft: "20px", color: "#FFF"}} size={20}/>}
          </Button>
          <h4 className="text-[#BFBBB1] sm:text-[14px] 2xl:text-[20px]">
            Already have an account?{' '}
            <span className="text-mzTextLight hover:underline">
              <Link href="/auth/login">Log in</Link>
            </span>
          </h4>
        </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default RegisterLogin;
