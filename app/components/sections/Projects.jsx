import { Card, CardFooter, CardHeader } from "@heroui/card";
import SectionHeader from "../comps/SectionHeader";
import Image from "next/image";
import { Link } from "@heroui/link";

const Projects = () => {
    const ProjectsCard = [
        {
            image: 'project01.jpg',
            alt: 'Remodels',
            link: 'project01',
            desc: 'Redesigns to specialize in clarity and conversions.'
        },
        {
            image: 'project02.jpg',
            link: 'project02',
            alt: 'Build Outs',
            desc: 'A multi-phase project with timeline highlights, and client testimonials.'
        },
        {
            image: 'project03.jpg',
            link: 'project03',
            alt: 'Clean, Professional Design',
            desc: ' Clean layouts, bold visuals, and clear service breakdowns.'
        },
        {
            image: 'project04.jpg',
            link: 'project04',
            alt: 'Custom Solutions',
            desc: 'A niche offering to focus on your individual business goals.'
        },
    ]

    return (
        <section id="Projects" className='max-w-7xl mx-auto py-12 px-8 md:px-0'>
            <SectionHeader title="Projects" />

            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ProjectsCard.map(({ image, link, alt, desc }) => (
                        <div key={image} className="w-full mx-auto">
                            <Card className="h-72 md:h-96 w-full" radius="none" isFooterBlurred>
                                <Image 
                                    src={`/${image}`}
                                    alt={alt}
                                    fill
                                    className="z-0 w-full h-full object-cover"
                                />
                                <CardFooter className="absolute bottom-0 flex-col">
                                    <p className="text-sm text-zinc-50 uppercase font-bold">{alt}</p>
                                    <h4 className="text-zinc-50 text-center text-md">{desc}</h4>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
}

export default Projects;