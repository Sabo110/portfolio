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
        <div className='px-4 py-10 xl:px-[80px] xl:py-[60px]'>
            <div className='flex flex-col gap-[48px] sm:relative sm:h-[280px] md:h-[360px] lg:h-[400px] xl:h-[400px]'>
                {/* section nom et description de moi */}
                <div className='flex flex-col gap-8 sm:w-1/2 lg:w-[58%] xl:w-[50%] sm:my-auto '>
                    <div className=''>
                        <p className='display_text'>
                            <span className='font-normal'>Salut c'est </span>
                            <span className='font-extrabold'>Yoba Sabo. </span>
                            <span className='font-extrabold'>Développeur </span>
                            <span className='outlined font-extrabold'>Fullstack </span>Résidant Au
                            <span className='font-extrabold'> Cameroun.</span>
                        </p>
                    </div>
                    <div className=''>
                        <p className='p2'>
                            Bienvenue sur mon portfolio ! Je suis un développeur full-stack spécialisé en Next.js,
                            passionné par la création de solutions web performantes et intuitives.
                            Découvrez mes projets et n’hésitez pas à me contacter pour collaborer ou échanger ! 🚀
                        </p>
                    </div>
                    {/* section reseau sociaux */}
                    <div className='flex items-center gap-6 py-1 sm:absolute sm:top-[270px] md:top-[320px] lg:top-[380px] xl:top-[400px]'>
                        {socials.map((social, index) => (
                            <div key={index} className={cn('w-[48px] h-[48px] p-3 rounded-[4px] border border-black')}>
                                <Image src={social.icon} alt='reseau social w-5 h-5 flex justify-center items-center' />
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={banner} alt='image de moi entrain de coder' className='order-first sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2  sm:w-[450px] md:w-[500px] lg:w-[620px] xl:w-[700px]' />
            </div>
        </div>
    )
}
