import React from 'react'
import Link from 'next/link'
import linkedin from '@/assets/linkedin.svg'
import githubIcon from '@/assets/github.svg'
import whatsapp from '@/assets/whatsapp.svg'
import telegram from '@/assets/telegram.svg'
import Image from 'next/image';


const footer = () => {
  return (
    <footer className='flex justify-between bg-[#21212150] backdrop-blur-md text-white py-8 px-36 '>
      <div className='pl-8'>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Piyas Ghosh. All rights reserved.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/piyas-ghosh-b10555233/" target="_blank">
          <Image
            src={linkedin}
            alt="A descriptive alt text"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://github.com/piyasmax" target="_blank">
          <Image
            src={githubIcon}
            alt="A descriptive alt text"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://wa.me/7908178140" target="_blank">
          <Image
            src={whatsapp}
            alt="A descriptive alt text"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://t.me/piyas_203" target="_blank">
          <Image
            src={telegram}
            alt="A descriptive alt text"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  )
}

export default footer
