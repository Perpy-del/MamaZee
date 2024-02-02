import Footer from '@/components/Footer';
import NavBar from '@/components/HeaderSection/NavBar';
import ProductCarousel from '@/components/ProductSection/ProductCarousel';
import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <div>
      <div className="bg-mzBlack text-mzLight md:pl-[40px] mdg:pl-20 mdg:pr-14 pb-3">
        <NavBar />
      </div>
      <div className="md:w-[55%] mdl:w-[75%] lg:w-full xl:w-[55%] lg:px-28 xl:px-0 sm:pl-5 sm:pr-6 mx-auto md:py-24 sm:py-8 smd:px-11">
        <h1 className="md:text-3xl smd:text-2xl sm:text-xl font-extrabold pb-10 3xl:text-4xl">Mamazee Hair Empire</h1>
        <section className="flex lg:flex-row sm:flex-col gap-5 pb-12">
          <Image
            src="/founder_pic.svg"
            width={340}
            height={400}
            alt="founder image"
          />
          <div>
            <h3 className="pb-2 md:text-xl sm:text-lg font-bold 3xl:text-3xl">About Us</h3>
            <h4 className="font-medium text-justify md:text-base sm:text-[15px] sm:pb-2 3xl:pb-7 3xl:text-xl">
              Our mission centers on enhancing your hair, scalp and overall
              well-being with our products. We aim to enhance your inner beauty
              and this compels us to ensure that our products feature a blend of
              the finest essential oils and herbs, each with proven benefits for
              skin and hair health.
            </h4>
            <p className="font-medium text-justify md:text-base sm:text-[15px] sm:pb-2 3xl:pb-7 3xl:text-xl">
              Crafted under the guidance of our founder&apos;s loving hands and
              rooted in age-old natural ingredients with zero addictive or
              processed preservative, Mamazee&apos;s hair products stand out as
              an unparalleled solution for nurturing your scalp and hair.
            </p>
            <p className="font-medium text-justify md:text-base sm:text-[15px] sm:pb-2 3xl:pb-7 3xl:text-xl">
              Embrace your journey with Mamazee and rediscover the confidence
              that comes with radiantly beautiful hair ✨
            </p>
          </div>
        </section>
        <section>
          <h3 className="pb-2 text-xl sm:text-lg font-bold 3xl:text-3xl">Who we are</h3>
          <h4 className="font-medium text-justify md:text-base sm:text-[15px] sm:pb-2 3xl:pb-7 3xl:text-xl">
            At Mamazee&apos;s, our journey unfolds through the intertwined
            stories of a mother and her daughter. On my wedding day in 2021, my
            hairstylist insisted I relax my natural hair leading to a painful
            experience and a bald spot. No product I tried created even a strand
            of hair. This struggle inspired the creation of Mamazee&apos;s hair
            products, which not only restored my hair but also transformed my
            daughter&apos;s locks.
          </h4>{' '}
          <p className="font-medium text-justify md:text-base sm:text-[15px] sm:pb-2 3xl:pb-7 3xl:text-xl">
            If you desire lush, healthy, and natural hair, Mamazee&apos;s is
            your lifelong solution, bringing a personal touch to your beauty
            journey and that of your loved ones. 🌿
          </p>
        </section>
      </div>
      <div className="bg-mzBlack px-[80px] lg:px-[80px] 2xl:px-[200px] sm:px-[20px] mdl:px-[60px] md:px-[80px] pb-28">
        <ProductCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
