import React from 'react'
import { Button } from "@/components/ui/button"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='pl-[15px] flex pt-[60px] gap-5'>
      <div className='flex flex-col gap-[20px]'>
        <h1 className='text-[66px] font-[800]'>Gorgeous Hair is the best Revenge</h1>
        <h4 className='text-mzTextLight text-[18px]'>Natural hair products that replenish your hair leaving it beautiful and soft</h4>
        <Button variant="mzvariant" size="mzsize">Shop now</Button>
      </div>
      <div></div>
    </div>
  )
}

export default HeroSection