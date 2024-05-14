'use client';

import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
// import { account } from '@/lib/appWrite';
import { auth } from '@/app/firebase/config';
import { validateEmail, validatePassword } from '@/lib/utils';
// import { ID, OAuthProvider } from 'appwrite';
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, OAuthProvider, confirmPasswordReset, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
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
  const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [newPassword, setNewPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [providerLoading, setProviderLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = React.useState<any>(null);
  const [resetPasswordActive, setResetPasswordActive] = React.useState<boolean>(false);
  const [passwordDoesNotMatch, setPasswordDoesNotMatch] = React.useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user ? setLoggedInUser(user) : setLoggedInUser(null);
    });

    return () => unsubscribe();
  }, [setLoggedInUser]);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleForgotPasswordEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setForgotPasswordEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
    setResetPasswordActive(validateEmail(inputEmail));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsPasswordValid(validatePassword(inputPassword));
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setNewPassword(inputPassword);
    setIsPasswordValid(validatePassword(inputPassword));
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setConfirmPassword(inputPassword);
    setResetPasswordActive(validatePassword(inputPassword));
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
      // const res = await account.create(ID.unique(), email, password);
      const res = await createUserWithEmailAndPassword(auth, email, password);
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

  const handleLoginWithProvider = async (checkProvider: string) => {
    setProviderLoading(true);
    let provider: any;
    if (checkProvider === 'Google') {
      provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account',
      });
    } else if (checkProvider === 'Facebook') {
      provider = new FacebookAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
    } else if (checkProvider === 'Twitter') {
      provider = new TwitterAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
    } else if (checkProvider === 'Yahoo') {
      provider = new OAuthProvider('yahoo.com');
      provider.setCustomParameters({
        prompt: 'login'
      });
    }
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('RESPONSE: ', result);
      if (result) {
        toast({
          variant: 'success',
          title: 'Account Created Successfully',
          description:
            'You have successfully created an account. Welcome to MamaZee!',
          action: (
            <ToastAction className="" altText="Success" onClick={() => router.push('/home')}>
              Home
            </ToastAction>
          ),
        });
        router.push('/home');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setProviderLoading(false);
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
      // const res = await account.createEmailPasswordSession(email, password);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log('RESPONSE: ', res);

      if (res) {
        toast({
          variant: 'success',
          title: 'Login Successful',
          description: 'You have successfully logged into your account!',
          action: (
            <ToastAction
              className=""
              altText="Success"
              onClick={() => router.push('/home')}
            >
              Home
            </ToastAction>
          ),
        });
        router.push('/home');
      }
      // setLoggedInUser(await account.get());
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.log(error);
      // if (error.message === 'Firebase: Error (auth/invalid-credential)') {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Email or Password is incorrect. Please log in with the correct credentials.',
          action: (
            <ToastAction className="" altText="Try again">
              Try again
            </ToastAction>
          ),
        });
      // } else {
      //   toast({
      //     variant: 'destructive',
      //     title: 'Uh oh! Something went wrong.',
      //     description: `${error.message}`,
      //     action: (
      //       <ToastAction className="" altText="Try again">
      //         Try again
      //       </ToastAction>
      //     ),
      //   });
      // }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      validateEmail(forgotPasswordEmail) ? setResetPasswordActive(true) : setResetPasswordActive(false);
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      toast({
        variant: 'success',
        title: 'Reset Password Email Sent',
        description: 'Please check your email for further instructions!',
        action: (
          <ToastAction
            className=""
            altText="Success"
            onClick={() => router.push('/auth/forgot-password/email-sent')}
          >
            Email Sent
          </ToastAction>
        ),
      });
      router.push('/auth/forgot-password/email-sent')
      setEmail('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (newPassword !== confirmPassword) {
        setPasswordDoesNotMatch(true);
        return;
      }
      setPasswordDoesNotMatch(false);
      const urlParams = new URLSearchParams(window.location.search);
      const oobCode = urlParams.get('oobCode') as string;
      console.log(oobCode);

      await confirmPasswordReset(auth, oobCode, confirmPassword);
      toast({
        variant: 'success',
        title: 'Password Has Been Reset Successfully',
        description: 'Please log into your account with your new password!',
        action: (
          <ToastAction
            className=""
            altText="Success"
            onClick={() => router.push('/auth/login')}
          >
            Login
          </ToastAction>
        ),
      });
      router.push('/auth/login')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
      setPassword('');
      setConfirmPassword('');
    }
  }

  const handleLogOut = async () => {
    try {
      // await account.deleteSession('current');
      await signOut(auth);
      toast({
        variant: 'success',
        title: 'Log Out',
        description: 'You have successfully logged out of your account!',
        action: (
          <ToastAction
            className=""
            altText="Success"
            onClick={() => router.push('/auth/login')}
          >
            Back to Login
          </ToastAction>
        ),
      });
      router.push('/auth/login');
      setLoggedInUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MamazeeContext.Provider
      value={{
        handleRegisterUser,
        handleLoginUser,
        handleEmail,
        handlePassword,
        handleNewPassword,
        handleConfirmPassword,
        handleForgotPasswordEmail,
        email,
        forgotPasswordEmail,
        password,
        newPassword,
        confirmPassword,
        isEmailValid,
        isPasswordValid,
        loading,
        handleLogOut,
        loggedInUser,
        handleLoginWithProvider,
        handleForgotPassword,
        handleResetPassword,
        resetPasswordActive,
        passwordDoesNotMatch,
        providerLoading
      }}
    >
      {children}
    </MamazeeContext.Provider>
  );
};

export default MamazeeContextProvider;
