import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import logo from "@/public/logo.svg"
import { Download } from 'lucide-react'

export const Navbar = () => {
    const links = [
        {
            text: 'A propos',
            link: '#about_me'
        },
        {
            text: 'Compétences',
            link: '#skills'
        },
        {
            text: 'Projets',
            link: '#projects'
        },
        {
            text: 'Me contacter',
            link: '#contact_me'
        }
    ]
  return (
    <div className='py-[24px] lg:px-[20px] xl:px-[80px] h-[104px] hidden lg:block border border-black'>
        <div className='px-8 flex justify-between items-center'>
            {/* le logo */}
            <div className='w-[140px] h-10'>
                <Image src={logo} alt='mon nom' className='object-fill h-full w-full'/>
            </div>
            {/* le menu */}
            <div>
                <ul className='flex gap-8'>
                    {links.map(item => (
                        <li key={item.link} className='heading_h5 font-semibold'><a href=""> {item.text} </a></li>
                    ))}
                </ul>
            </div>
            {/* mon cv */}
            <div>
                <Button>Mon cv <Download /></Button>
            </div>
        </div>
    </div>
  )
}
