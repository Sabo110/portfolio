import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import quote from "@/public/quote.png"
import per1 from "@/public/per1.png"
import { cn } from '@/lib/utils'

export const Temoignages = () => {
    const Temoignages = [
        {
            text: 'Un site moderne et pratique ! YOBA SABO a parfaitement compris mes besoins. Je recommande vivement ses services.',
            image: per1,
            name: 'Mbanou Yoba',
            profession: 'Sécrétaire'
        },
        {
            text: 'Blog superbe et fonctionnel ! Travail professionnel et soigné. YOBA SABO a été disponible et très à l’écoute.',
            image: per1,
            name: 'Christian',
            profession: 'Blogueur',
            bg: true
        }
    ]
    return (
        <div className='md:py-[60px] md:px-[80px] px-[16px] py-[40px]'>
            <div className='px-[32px] space-y-[20px]'>
                <h1 className='display_text text-center'>Mes <span className='font-extrabold'>Témoignages</span></h1>
                <div className='flex md:flex-row flex-col md:gap-[24px] p-[20px] gap-[40px]'>
                    {Temoignages.map((temoignage, index) => (
                        <TemoignageCrad temoignage={temoignage} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

type TemoignageCradProps = {
    temoignage: {
        name: string
        image: StaticImport
        text: string
        profession: string
        bg?: boolean
    }
}
function TemoignageCrad({ temoignage }: TemoignageCradProps) {
    return (
        <div className={cn('md:w-[370px] md:p-[40px] p-[24px] w-[303px] rounded-[20px] flex flex-col items-center gap-[24px] shadow-lg', temoignage.bg ? 'bg-primary text-white' : null)}>
            <div className='w-[96px] h-[96px] relative'>
                <Image src={temoignage.image} alt='image du concerné' className='' />
                <Image src={quote} alt='double quote' className='absolute top-[66px] left-[66px]' />
            </div>

            <p>
                {temoignage.text}
            </p>
            <span> {temoignage.name} </span>
            <Separator className="h-[2px] w-[120px]" />
            <span>  {temoignage.profession} </span>
        </div>
    )
}