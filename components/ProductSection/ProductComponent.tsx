import Footer from '@/components/Footer';
import NavBar from '@/components/HeaderSection/NavBar';
import ProductCarousel from '@/components/ProductSection/ProductCarousel';
import React from 'react';
import { auth } from '../../app/firebase/config';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import HomeNavSection from '../HeaderSection/NavBarComponents/HomeNavSection';

type Props = {};

const ProductComponent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [loggedInUser, setLoggedInUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(null);
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div>
      <div className="bg-mzBlack text-mzLight md:pl-[40px] mdg:pl-20 mdg:pr-14 pb-3">
        {loggedInUser ? <HomeNavSection /> : <NavBar />}
      </div>
      {children}
      <div className="bg-mzBlack px-[80px] lg:px-[80px] 2xl:px-[200px] sm:px-[20px] mdl:px-[60px] md:px-[80px] pb-28">
        <ProductCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default ProductComponent;
