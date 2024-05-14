import Footer from '@/components/Footer';
import NavBar from '@/components/HeaderSection/NavBar';
import HomeNavSection from '@/components/HeaderSection/NavBarComponents/HomeNavSection';
import React from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-mzBlack text-mzLight md:pl-[40px] mdg:pl-20 mdg:pr-14">
        <HomeNavSection />
        {/* <NavBar /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
