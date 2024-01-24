'use client';

import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { customTheme } from '../../../components/Auth/RegisterLogin/customTheme';
import Image from 'next/image';
import {MoveLeft} from 'lucide-react';

type Props = {};

const ForgotPassword = (props: Props) => {
  const [resetPasswordActive, setResetPasswordActive] =
    React.useState<boolean>(true);
  const outerTheme = useTheme();

  return (
    <div className="bg-mzBlack h-screen px-[80px] py-[30px]">
      
      {/* Logo */}

      <Link href="/">
        <Image src="/mz_black.svg" alt="mamazee logo" width={85} height={42} />
      </Link>
      <div className="w-1/2 mx-auto flex flex-col justify-center h-[80%]">
        <h1 className="text-[#AC8005] text-[25px] font-semibold">
          Forgot password?
        </h1>
        <h3 className="text-[#BFBBB1] text-sm pb-[66px]">
          No worries, we’ll send you reset instructions
        </h3>
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
          } h-[38px] text-mzLight`}
        >
          Reset password
        </Button>
        <Link href='/auth/login' className='mt-4 flex items-center gap-4 hover:gap-2 hover:transition-all transform duration-1000 w-[140px]'>
          <MoveLeft className='text-[#BFBBB1]' />
          <h3 className='text-[#BFBBB1] text-sm hover:text-mzLight hover:font-semibold'>Back to Log in</h3>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
