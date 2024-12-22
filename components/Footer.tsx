import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg"
import facebookpro from "@/public/facebookpro.svg"
import linkedin from "@/public/linkedin.svg"
import whatsapp from "@/public/whatsapp.svg"
import gmail from "@/public/gmail.png"
import { Separator } from './ui/separator'

export const Footer = () => {
  const Contacts = [
    {
      text: 'Yoba Sabo',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/jalloud-phanuel'
    },
    {
      text: '+237 659-18-27-23',
      icon: whatsapp,
      link: 'https://wa.me/237659182723'
    },
    {
      text: 'saboprofessionel@gmail.com',
      icon: gmail,
      link: 'mailto:saboprofessionel@gmail.com'
    },
    {
      text: 'AutoSamir',
      icon: facebookpro,
      link: 'https://web.facebook.com/profile.php?id=61570390508268'
    }
  ]
  return (
    <div className='px-4 py-8'>
      <div className='mb-4'>
        <Separator className='w-full bg-black mb-4'/>
        <ul className='space-y-2'>
          {Contacts.map((item, index) => (
            <li key={index}>
              <a href={item.link} target='_blank' className='flex items-center gap-2'>
                <Image src={item.icon} alt='logo' className='w-4 h-4' />
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=' flex justify-between items-center  '>
        <div className='w-[139px] h-[40px]'>
          <Image src={logo} alt='mon logo' className='object-fill h-full w-full bg-white' />
        </div>
        <div className='flex flex-col'>
          <span className='p3'>@copiright 2024</span>
        </div>
      </div>
    </div>
  )
}
