/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = {}

const ExploreTreatment = (props: Props) => {
  return (
    <div className='py-[90px] md:py-[20px] px-[50px]  sm:px-[20px] flex flex-wrap justify-center items-center 3xl:px-[240px]'>
      <Image src='/explore_tm_one.svg' alt='explore_treatment card' className='md:hidden smd:w-[290px] mdl:w-[500px] mdg:flex mdg:w-[265px] lg:w-[280px] xl:w-[33%]' width={500} height={500} priority />
      <div className='text-center w-full bg-[#FFF2CD] flex flex-col items-center smd:w-[290px] justify-center sm:h-[250px] md:w-[300px] mdg:w-[265px] mdg:h-[300px] md:h-[345px] mdl:w-[500px] lg:w-[280px] lg:h-[320px] xl:w-[33%] xl:h-full xl:py-[155px] xxl:h-[500px] 3xl:h-[750px] mdl:h-[400px]'>
        <h2 className='text-[#8A6500] text-[30px] sm:text-[18px] sm:w-[95%] sm:font-bold tracking-tight leading-snug font-semibold md:w-[90%] 3xl:text-[40px]'>You deserve a Mamazee Treatment</h2>
        <h4 className='text-[#0D0D0DF7] sm:text-[14px] pb-[60px] sm:pb-[30px] md:text-[13px] 3xl:text-[20px]'>Shop for organic hair products</h4>
        <Button variant="mzvariant" className='w-[40%] my-0 mx-auto h-12 md:h-10 rounded sm:w-[50%] 3xl:text-[20px] 3xl:h-16'>Shop now</Button>
      </div>
      <Image src='/explore_tm_two.svg' alt='explore_treatment card' className='md:w-[300px] mdg:w-[267px] lg:w-[285px] xl:w-[33.5%] mdl:w-[500px] smd:w-[290px]' width={500} height={500} priority />
    </div>
  )
}

export default ExploreTreatment