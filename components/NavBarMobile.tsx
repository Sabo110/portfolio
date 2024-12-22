"use client"

import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg"
import burger from "@/public/burger.svg"
import { SheetMenu } from './SheetMenu'

export const NavBarMobile = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className='lg:hidden h-[72px] p-4'>
            <SheetMenu open={open} setOpen={setOpen}/>
            <div className='flex items-center justify-between'>
                <div className='w-[140px] h-[40px] flex justify-center items-center '>
                    <Image src={logo} alt='mon nom' />
                </div>
                <div className='w-9 h-9 ' onClick={() => setOpen(true)}>
                    <Image src={burger} alt='menu burger' className='object-fill w-full h-full cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
