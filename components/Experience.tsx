import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import facebook from "@/public/facebook_icon.svg"

export const Experience = () => {
    const Experiences = [
        {
            logo: facebook,
            title: 'Développeur web fullstack chez CEDICLIN',
            description: 'stagiaire en developpment web avec la stack symphony',
            date: 'une date'
        },
        {
            logo: facebook,
            title: 'Développeur web fullstack chez RAMAT SERVICE',
            description: 'stagaiare en developpement web avec la stack next js',
            date: 'une date'
        }
    ]
    return (
        <div className='py-10 px-4 bg-black text-white'>
            <div className='space-y-5'>
                <h1 className='text-center display_text'>Mes <span className='font-extrabold'>Expériences</span></h1>
                <div className='space-y-5 sm:w-[500px] md:w-full lg:w-[800px] xl:w-[1000px] sm:mx-auto'>
                    {Experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            title={experience.title}
                            description={experience.description}
                            data={experience.date}
                            logo={experience.logo}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

type ExperienceCardProps = {
    title: string
    logo: StaticImport
    description: string
    data: string
}
function ExperienceCard({ title, logo, description, data }: ExperienceCardProps) {
    return (
        <div className='px-6 py-[30px] space-y-7 rounded-[10px] border border-zinc-500'>
            <div className='space-y-[30px] md:space-y-0 md:flex md:justify-between md:items-center'>
                <div className='flex items-center gap-[30px]'>
                    <Image src={logo} alt='logo de entreprise' className='w-[32px] h-[32px]' />
                    <span className='font-semibold'> {title} </span>
                </div>
                <div><span> {data} </span></div>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}