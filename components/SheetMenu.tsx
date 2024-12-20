import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

type SheetMenuProps = {
    open: boolean
    setOpen: (open: boolean) => void
}
export const SheetMenu = ({open, setOpen}: SheetMenuProps) => {
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
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side={'left'}>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <div className='h-full p-4 flex justify-center items-center'>
                    <ul className='flex flex-col gap-10'>
                        {links.map(item => (
                            <li key={item.link} className='heading_h5 font-semibold'><a href=""> {item.text} </a></li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>

    )
}
