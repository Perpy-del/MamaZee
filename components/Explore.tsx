import React from 'react'
import ExploreShop from './ExploreSection/ExploreShop'
import ExploreTreatment from './ExploreSection/ExploreTreatment'

type Props = {}

const Explore = (props: Props) => {
  return (
    <div className='md:px-[60px] lg:px-[60px] pt-[50px] pb-[80px] sm:px-[20px] mdg:px-[30px]'>
      <ExploreShop />
      <ExploreTreatment />
    </div>
  )
}

export default Explore