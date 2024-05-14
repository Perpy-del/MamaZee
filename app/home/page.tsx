'use client';

import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Products from '@/components/Products';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { auth } from '../firebase/config';
import { CircularProgress } from '@mui/material';
import HomeNavComponent from '@/components/HeaderSection/NavBarComponents/HomeNavComponent';

export default function Home() {
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

  return loggedInUser ? (
    <main className="">
      <div>
        <HomeNavComponent />
        <Explore />
        <Products />
        <Footer />
      </div>
    </main>
  ) : (
    <div className="h-[75vh] flex items-center justify-center">
      <CircularProgress size={100} style={{ color: '#FFF' }} />
    </div>
  );
}
