import { FormEvent } from "react";

export interface LoginRegisterInterface {
    topText: string;
    bottomText: string;
    // buttonText: 'Log in' | 'Sign up';
    children?: React.ReactNode;
    // handleSubmit: (e: FormEvent<HTMLFormElement>) => {};
  }