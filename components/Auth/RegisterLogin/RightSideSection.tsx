import Image from 'next/image'
import React from 'react'

type Props = {}

const RightSideSection = (props: Props) => {
  return (
    <div className='mdg:pt-[45px] mdg:pl-[45px] md:pt-[20px] md:pl-[30px] xxl:pl-[60px] xxl:pt-[70px] md:block md:w-[50%] h-screen sm:hidden 2xl:pl-[100px]'>
      <h1 className='font-semibold md:text-[20px] mdg:text-[26px] 2xl:text-[40px]'>Elevate Your Hair Care Experience</h1>
      <h3 className='text-[14px] text-[#504E48] pt-[10px] mdg:w-[85%] 2xl:text-[25px]'>Experience peak hair health and opulence with our curated organic products for luxurious, exceptionally healthy hair.</h3>
      <div className='overflow-hidden w-full mdg:h-[70%] lg:h-[85%] pt-5 lg:pt-8'>
        <Image src='/explore_tm_two.svg' alt='login right side image' width={600} height={500} priority className='object-cover object-center rounded-tl-[100px] sm:w-[600px] 2xl:w-[200%]' />
      </div>
    </div>
  )
}

export default RightSideSection