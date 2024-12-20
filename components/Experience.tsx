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
        <div className='xl:px-[80px] xl:py-[60px] lg:px-[40px] lg:py-[30px] bg-primary text-white'>
            <div className='px-[32px] space-y-[20px] '>
                <h1 className='text-center display_text'>Mes <span className='font-extrabold'>Expériences</span></h1>
                <div className='space-y-[32px]'>
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
        <div className='rounded-[10px] px-[24px] py-[30px] space-y-[28px] border border-gray-100'>
            <div className='flex md:flex-row md:items-center md:justify-between flex-col md:gap-0 gap-[20px]'>
                <div className='flex gap-4 items-center'>
                    <Image src={logo} alt='logo de entreprise' className='w-[32px] h-[32px]'/>
                    <span className='h4 font-semibold'> {title} </span>
                </div>
                <span> {data} </span>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}