import React from 'react'
import facebook from "@/public/facebook_icon.svg"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export const Skills = () => {
    const skills = [
        {
            logo: facebook,
            text: 'Git'
        },
        {
            logo: facebook,
            text: 'Javascript'
        },
        {
            logo: facebook,
            text: 'React Js'
        },
        {
            logo: facebook,
            text: 'Next Js'
        },
    ]
    return (
        <div className='md:px-[80px] md:py-[60px] px-[16px] py-[40px]'>
            <div className='md:px-[32px] md:space-y-[20px]'>
                <h1 className='display_text text-center'>Mes <span className='font-extrabold'>Compétences</span></h1>
                <div className='py-[20px] md:flex md:justify-center md:gap-8 gap-[20px] grid grid-cols-2'>
                    {skills.map(skill => (
                        <SkillCard logo={skill.logo} text={skill.text} key={skill.text}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

type SkillCardProps = {
    logo: StaticImport
    text: string
}
function SkillCard({logo, text}: SkillCardProps) {
    return (
        <div className='md:w-[186px] md:h-[186px] p-[24px] rounded-[4px] border border-primary flex flex-col md:gap-[32px] items-center'>
            <Image src={logo} alt='logo' className='w-[56px] h-[56px]'/>
            <span className='h5 font-semibold'> {text} </span>
        </div>
    )
}
