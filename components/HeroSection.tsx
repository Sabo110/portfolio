import React from 'react'
import banner from "@/public/Banner.svg"
import Image from 'next/image'
import facebook from "@/public/facebook_icon.svg"
import { cn } from '@/lib/utils'

export const HeroSection = () => {
    const socials = [
        {
            icon: facebook,
            bg: 'bg-primary'
        },
        {
            icon: facebook,
            bg: ''
        },
        {
            icon: facebook,
            bg: ''
        }
    ]
    return (
        <div className='xl:px-[80px] xl:py-[60px] lg:px-[40px] lg:py-[30px] relative lg:h-[716px] md:h-[500px] border-2 border-red-200 px-[16px] py-[40px]'>
            <div className='xl:px-[32px] lg:px-[16px] h-full flex md:flex-row md:items-center flex-col md:gap-0 gap-[48px]'>
                {/* section nom et description de moi */}
                <div className='max-w-[630px] py-[20px] space-y-[32px] absolute md:w-[370px] lg:w-[600px] border-2 border-red-200'>
                    <div className=''>
                        <p className='display_text'>
                            <span className='font-normal'>Salut c'est </span>
                            <span className='font-extrabold'>Yoba Sabo. </span> 
                            <span className='font-extrabold'>Développeur </span> 
                            <span className='outlined font-extrabold'>Fullstack </span>Résidant Au 
                            <span className='font-extrabold'> Cameroun.</span>
                        </p>
                    </div>
                    <div className='h-[96px]'>
                        <p className='p2'>
                            Bienvenue sur mon portfolio ! Je suis un développeur full-stack spécialisé en Next.js,
                            passionné par la création de solutions web performantes et intuitives.
                            Découvrez mes projets et n’hésitez pas à me contacter pour collaborer ou échanger ! 🚀
                        </p>
                    </div>
                </div>
                {/* section image de moi */}
                
                    <Image src={banner} alt='image de moi entrain de coder' className='xl:w-[700px] lg:w-[500px] md:w-[500px] md:ms-auto h-[332px]'/>
                

                {/* section reseau sociaux */}
                <div className='flex items-center gap-[32px] absolute xl:letf-[112px] xl:top-[550px] lg:letf-[112px] lg:top-[500px] md:top-[380px] py-[4px]'>
                    {socials.map((social, index) => (
                        <div key={index} className={cn('w-[56px] h-[56px] p-[16px] border border-primary rounded-[4px]')}>
                            <Image src={social.icon} alt='reseau social' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
