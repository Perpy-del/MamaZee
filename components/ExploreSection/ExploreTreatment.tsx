/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const ExploreTreatment = (props: Props) => {
  return (
    <div className='py-[128px] px-[50px] flex'>
      <img src='/explore_tm_one.svg' width='33%' height={457} alt='explore_treatment card' />
      <div className='w-[433px] text-center bg-[#FFF2CD] flex flex-col justify-center'>
        <h2 className='text-[#8A6500] text-[30px] tracking-tight leading-snug font-semibold'>You deserve a Mamazee Treatment</h2>
        <h4 className='text-[#0D0D0DF7] pb-[60px]'>Shop for organic hair products</h4>
        <Button variant="mzvariant" className='w-[40%] my-0 mx-auto h-12 rounded'>Shop now</Button>
      </div>
      <img src='/explore_tm_two.svg' width='33%' height={457} alt='explore_treatment card' />
    </div>
  )
}

export default ExploreTreatment