import Image from 'next/image'
import React from 'react'
import aboutme from "@/public/aboutme.svg"

export const AboutMe = () => {
    return (
        <div className='md:px-[80px] md:py-[60px] lg:px-[40px] px-[16px] py-[40px] '>
            <div className='space-y-5 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-10  lg:w-[950px] xl:w-[1100px] lg:mx-auto'>
                <div className="">
                    <Image src={aboutme} alt='une image de moi' className='object-fill h-full w-full' />
                </div>
                <div className='space-y-[20px]'>
                    <h1 className='display_text'>A Propos de <span className='font-extrabold'>moi</span></h1>
                    <div className='space-y-[20px]'>
                        <p className='p2'>
                            Je suis un développeur full-stack avec une licence en génie logiciel, spécialisé en Next.js.
                            Mon parcours académique m’a permis de maîtriser les bases solides du développement logiciel, tandis
                            que mes expériences pratiques m’ont permis de créer des applications web performantes et intuitives.
                            Passionné par les nouvelles technologies, je suis constamment motivé par l’envie de relever des défis
                            techniques
                            et de trouver des solutions innovantes.
                        </p>
                        <p className='p2'>
                            J’aime concevoir des interfaces utilisateur ergonomiques et développer
                            des systèmes backend robustes. Toujours en quête d’apprentissage, je m’efforce de rester
                            à jour avec les dernières tendances du développement pour
                            transformer des idées en projets concrets et fonctionnels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
