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
            text: 'Python'
        },
        {
            logo: facebook,
            text: 'React Js'
        },
        {
            logo: facebook,
            text: 'Next Js'
        },
        {
            logo: facebook,
            text: 'Tailwind Css'
        },
    ]
    return (
        <div className='py-10 px-4'>
            <div className='space-y-5'>
                <h1 className='display_text text-center'>Mes <span className='font-extrabold'>Compétences</span></h1>
                <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 w-[343px] sm:w-[524.5px] mx-auto'>
                    {skills.map((skill, index) => (
                        <SkillCard logo={skill.logo} text={skill.text} key={index}/>
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
        <div className='w-[161.5px] h-[160px] p-6 flex flex-col gap-8 rounded-[4px] border border-black'>
            <Image src={logo} alt='logo' className='w-[56px] h-[56px]'/>
            <span className='h5 font-semibold'> {text} </span>
        </div>
    )
}
