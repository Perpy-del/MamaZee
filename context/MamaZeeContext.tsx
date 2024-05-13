'use client';

import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { account } from '@/lib/appWrite';
import { validateEmail, validatePassword } from '@/lib/utils';
import { ID } from 'appwrite';
import { useRouter } from 'next/navigation';
import React, { FormEvent, createContext } from 'react';

export const MamazeeContext = createContext<any>({});

const MamazeeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = React.useState<any>(null);

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
        variant: 'destructive',
        title: 'Email and Password cannot be empty.',
        description:
          'Please enter a valid email address and password before you can login',
        action: (
          <ToastAction className="" altText="Try again">
            Try again
          </ToastAction>
        ),
      });
      return;
    }
    setLoading(true);
    try {
      const res = await account.create(ID.unique(), email, password);
      console.log('RESPONSE: ', res);
      if (res) {
        toast({
          variant: 'success',
          title: 'Account Created Successfully',
          description:
            'You have successfully created an account. Please log in!',
          action: (
            <ToastAction className="" altText="Success">
              Log in
            </ToastAction>
          ),
        });
        router.push('/auth/login');
      }
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${error.message}`,
        action: (
          <ToastAction className="" altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast({
        variant: 'destructive',
        title: 'Email and Password cannot be empty.',
        description:
          'Please enter a valid email address and password before you can login',
        action: (
          <ToastAction className="" altText="Try again">
            Try again
          </ToastAction>
        ),
      });
      return;
    }
    setLoading(true);
    try {
      const res = await account.createEmailPasswordSession(email, password);
      console.log("RESPONSE: ", res);
      
      if (res) {
        toast({
          variant: 'success',
          title: 'Login Successful',
          description:
            'You have successfully logged into your account!',
          action: (
            <ToastAction className="" altText="Success" onClick={() => router.push('/home')}>
              Home
            </ToastAction>
          ),
        });
        router.push('/home');
      }
      setLoggedInUser(await account.get());
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${error.message}`,
        action: (
          <ToastAction className="" altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current")
      router.push("/auth/login")
      setLoggedInUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MamazeeContext.Provider value={{ handleRegisterUser, handleLoginUser, handleEmail, handlePassword, email, password, isEmailValid, isPasswordValid, loading, handleLogOut, loggedInUser }}>
      {children}
    </MamazeeContext.Provider>
  );
};

export default MamazeeContextProvider;
