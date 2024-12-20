import Image from 'next/image'
import React from 'react'
import logo from "@/public/facebook_icon.svg"
export const Footer = () => {
  return (
    <div className='px-[80px] py-[24px] flex justify-between bg-primary text-white'>
        <Image src={logo} alt='mon logo' className='bg-white'/>
        <div className='flex flex-col'>
            <small>@copiright 2024</small>
            <span>YOBA SABO</span>
        </div>
    </div>
  )
}
