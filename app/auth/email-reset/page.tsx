import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const EmailResetPage = (props: Props) => {
  return (
    <div className="bg-mzBlack h-screen px-[80px] py-[30px]">
        {/* Logo */}
        <Link href="/">
        <Image src="/mz_black.svg" alt="mamazee logo" width={85} height={42} />
      </Link>
      <div>
        
      </div>
    </div>
  )
}

export default EmailResetPage