import React from 'react';
import Image from 'next/image';
import { registerLoginData } from '@/components/Auth/RegisterLogin/data';
import { LoginRegisterInterface } from '@/interfaces/loginInterface';
import { useMamazeeHook } from '@/hooks/useMamazeeHook';
import { CircularProgress } from '@mui/material';

const FormComponent = (props: LoginRegisterInterface) => {
  const { handleLoginWithProvider, providerLoading } = useMamazeeHook();

  return (
    <div
      className="flex flex-col mdg:pl-[50px] lg:pl-[0px] xl:pl-[50px] sm:pl-[10px] sm:w-full items-start mdg:pr-[50px] xl:w-[90%] 2xl:w-[87%] 2xl:pl-[150px]"
      // onSubmit={props.handleSubmit}
    >
      {/* Top */}
      <>
        <h1
          className={`text-[#AC8005] mdg:text-[20px] xl:text-[25px] md:text-[18px] sm:text-[18px] font-medium sm:pt-7 md:pt-4 xxl:pt-48 mdl:text-[25px]`}
        >
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
                <button onClick={() => handleLoginWithProvider(data.name)}>
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
      {providerLoading && (
        <div className='w-full flex items-center justify-center mt-5'>
        <CircularProgress style={{ color: '#FFF' }} size={30} />
        </div>
      )}
      {/* OR */}
      <div
        className={`w-full flex items-center justify-between md:mt-[30px] lg:mt-[45px] sm:mt-[30px] xxl:mt-[100px]`}
      >
        <div className="bg-[#504E48] h-[1px] w-[45%]"></div>
        <span className="text-[#78756C] xxl:text-[24px]"> Or </span>
        <div className="bg-[#504E48] h-[1px] w-[45%]"></div>
      </div>
      {/* Bottom */}
      {props.children}
    </div>
  );
};

export default FormComponent;
