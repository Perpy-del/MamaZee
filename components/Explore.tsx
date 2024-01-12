import React from 'react'
import ExploreShop from './ExploreSection/ExploreShop'
import ExploreTreatment from './ExploreSection/ExploreTreatment'

type Props = {}

const Explore = (props: Props) => {
  return (
    <div className='px-[80px] pt-[50px] pb-[80px]'>
      <ExploreShop />
      <ExploreTreatment />
    </div>
  )
}

export default Explore