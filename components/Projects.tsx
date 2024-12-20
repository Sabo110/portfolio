import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import img1 from "@/public/img1.png"
import img2 from "@/public/img2.png"
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
    const Projects = [
        {
            title: 'Site internet pour une épicerie',
            demo: 'https://www.epicerie-mama-vercel.app',
            description: "Site quipresente les differents produits d'une épicerie",
            image: img1,
            number: '01'
        },
        {
            title: 'blog sur le developpement personnel',
            demo: 'https://www.epicerie-mama-vercel.app',
            description: "Blog qui présente quelques articles sur le developpment personne, la motivation et les relations homme-femme",
            image: img2,
            order: 'md:order-2',
            number: '02'
        },

    ]
    return (
        <div className='md:px-[80px] md:py-[60px] px-[16px] py-[40px] bg-primary text-white' >
            <div className='px-[32px] space-y-[20px]'>
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
        <div className='flex md:items-center md:gap-[40px] flex-col gap-[28px]'>
            <div className={cn('md:w-[594px] md:h-[476px] h-[398px] w-[300px] md:ms-auto md:flex md:flex-col md:justify-center', project.order)}>
                <Image src={project.image} alt='image de couverture du projet' className='object-fill h-full w-full' />
            </div>
            <div className='flex flex-col gap-[28px]'>
                <span className='display_text font-extrabold'> {project.number} </span>
                <span className='h3 font-semibold'> {project.title} </span>
                <p> {project.description} </p>
                <a href={project.demo}>
                    <ExternalLink size={30} />
                </a>
            </div>
        </div>
    )
}
