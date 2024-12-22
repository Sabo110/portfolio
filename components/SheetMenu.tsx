import React from 'react'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
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
export const SheetMenu = ({ open, setOpen }: SheetMenuProps) => {
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
                    <ul className='flex flex-col gap-10 menu'>
                        {links.map(item => (
                            <li key={item.link} className='heading_h5 font-semibold'><a href={item.link} onClick={() => setOpen(false)}> {item.text} </a></li>
                        ))}
                        <li>
                            <Button>Mon cv <Download /></Button>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>

    )
}
