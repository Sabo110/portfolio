import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import quote from "@/public/quote.png"
import { cn } from '@/lib/utils'
import femme from "@/public/femme.jpg"
import homme from "@/public/homme.jpg"

export const Temoignages = () => {
    const Temoignages = [
        {
            text: 'Un site moderne et pratique ! YOBA SABO a parfaitement compris mes besoins. Je recommande vivement ses services.',
            image: femme,
            name: 'Mbanou Yoba',
            profession: 'Sécrétaire'
        },
        {
            text: 'Blog superbe et fonctionnel ! Travail professionnel et soigné. YOBA SABO a été disponible et très à l’écoute.',
            image: homme,
            name: 'Christian',
            profession: 'Blogueur',
            bg: true
        }
    ]
    return (
        <div className='md:py-[60px] md:px-[40px] px-[16px] py-[40px]'>
            <div className='sm:space-y-5'>
                <h1 className='display_text text-center'>Mes <span className='font-extrabold'>Témoignages</span></h1>
                <div className='grid gap-10 p-5 w-[343px] mx-auto sm:w-[568px] sm:grid-cols-2 sm:gap-5 sm:p-0 md:w-[640px] lg:w-[760px] xl:w-[760px]'>
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
        <div className={cn('md:w-[310px] md:p-[40px] lg:w-[370px] xl:w-[370px] p-6 w-[303px] sm:w-[270px] rounded-[20px] flex flex-col items-center gap-6 shadow-lg', temoignage.bg ? 'bg-primary text-white' : null)}>
            <div className='w-[96px] h-[96px] relative'>
                <Image src={temoignage.image} alt='image du concerné' className='object-fill h-full w-full rounded-full' />
                <Image src={quote} alt='double quote' className='absolute top-[66px] left-[66px]' />
            </div>

            <p className="button_text2">
                {temoignage.text}
            </p>
            <span className="heading_h5"> {temoignage.name} </span>
            <Separator className="h-[2px] w-[120px]" />
            <span className="heading_h6">  {temoignage.profession} </span>
        </div>
    )
}