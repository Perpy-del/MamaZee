import Footer from '@/components/Footer'
import NavBar from '@/components/HeaderSection/NavBar'
import ProductCarousel from '@/components/ProductSection/ProductCarousel'
import React from 'react'

type Props = {}

const AllProductCategoriesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className="bg-mzBlack text-mzLight md:pl-[40px] mdg:pl-20 mdg:pr-14 pb-3">
        <NavBar />
      </div>
      {children}
      <div className="bg-mzBlack px-[80px] lg:px-[80px] 2xl:px-[200px] sm:px-[20px] mdl:px-[60px] md:px-[80px] pb-28">
        <ProductCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default AllProductCategoriesLayout