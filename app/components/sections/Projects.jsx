import { Card } from "@heroui/card";
import SectionHeader from "../comps/SectionHeader";
import Image from "next/image";
import { Link } from "@heroui/link";

const Projects = () => {
    const ProjectsCard = [
        {
            image: 'project01.jpg',
            alt: 'Project 01',
            link: 'project01'
        },
        {
            image: 'project02.jpg',
            link: 'project02',
            alt: 'Project 02'
        },
        {
            image: 'project03.jpg',
            link: 'project03',
            alt: 'Project 03'
        },
        {
            image: 'project04.jpg',
            link: 'project04',
            alt: 'Project 04'
        },
    ]

    return (
        <section id="Projects" className='px-24 py-12'>
            <SectionHeader title="Projects" />

            <div className="mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    {ProjectsCard.map(({ image, link, alt }) => (
                        <Link key={image} href={`/projects/${link}`} className="w-full mx-auto">
                            <Card className="h-48 md:h-96 w-full" radius="none">
                                <Image 
                                    src={`/${image}`}
                                    alt={alt}
                                    fill
                                    className="z-0 w-full h-full object-cover"
                                />
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            
        </section>
    );
}

export default Projects;