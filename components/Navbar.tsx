import React from 'react'
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    const links = [
        {
            text: 'About Me',
            link: ''
        },
        {
            text: 'Skills',
            link: ''
        },
        {
            text: 'Projects',
            link: ''
        },
        {
            text: 'Contact Me',
            link: ''
        }
    ]
  return (
    <div className='lg:py-[24px] lg:px-[80px] flex items-center justify-around'>
        <div>logo</div>
        <div className='space-x-4'>
            {links.map(link => (
                <a href={link.link} key={link.text} className='h4 font-semibold'> {link.text} </a>
            ))}
        </div>
        <div>
        <Button>Resume</Button>
        </div>
    </div>
  )
}
