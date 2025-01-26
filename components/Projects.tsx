import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import easyorder from "@/public/easyorder.jpg"
import epicerie from "@/public/epicerie.jpg"
import blog from "@/public/blog.jpg"

import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
    const Projects = [
        {
            title: 'Plateforme de commande via whatsapp',
            demo: 'https://easy-order-by-me.vercel.app',
            description: "Une plateforme qui permet aux vendeurs de produits ou articles physiques de pouvoir se faire commander leurs produits ou articles par whatsapp",
            image: easyorder,
            order: 'sm:order-last',
            number: '01'
        },
        {
            title: 'Site internet pour une épicerie',
            demo: 'https://site-epicerie-pour-mama.vercel.app',
            description: "Site quipresente les differents produits d'une épicerie.",
            image: epicerie,
            number: '02'
        },
        {
            title: 'blog sur le developpement personnel',
            demo: 'https://the-mind-set.netlify.app',
            description: "Blog qui présente quelques articles sur le developpment personne, la motivation et les relations homme-femme.",
            image: blog,
            order: 'sm:order-last',
            number: '03'
        },

    ]
    return (
        <div className='md:px-[16px] md:py-[40px] px-[16px] py-[40px] bg-primary text-white' id='projects'>
            <div className='lg:px-[32px] space-y-[20px]'>
                <h1 className='text-center display_text'>Mes <span className='font-extrabold'>Projets</span></h1>
                    {Projects.map((project, index) => (
                        <ProjectCrad project={project} key={index} />
                    ))}
            </div>
        </div>
    )
}

type ProjectCradProps = {
    project: {
        image: StaticImport
        title: string
        description: string
        demo: string
        number: string
        order?: string
    }
}
function ProjectCrad({ project }: ProjectCradProps) {
    return (
        <div className='sm:py-5 sm:flex sm:items-center sm:gap-5  sm:min-w-[608px] sm:max-w-[700px] sm:mx-auto md:min-w-[716px] md:max-w-[800px] lg:min-w-[908px] xl:min-w-[1164px]'>
            <div className={cn('h-[350px] sm:w-[300px] sm:h-[200px] md:w-[350px] md:h-[250px] xl:w-[450px] xl:h-[350px]', project.order)}>
                <Image src={project.image} alt='image de couverture du projet' className='object-cover w-full h-full' placeholder='blur'/>
            </div>
            <div className='flex flex-col gap-7  sm:w-[108px] grow'>
                <span className='display_text font-extrabold'> {project.number} </span>
                <span className='heading_h2 lg:font-bold font-extrabold'> {project.title} </span>
                <p className=''> {project.description} </p>
                <a href={project.demo} target='_blank'>
                    <ExternalLink size={30} />
                </a>
            </div>
        </div>
    )
}
