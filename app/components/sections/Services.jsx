import Image from 'next/image';
import SectionHeader from '../comps/SectionHeader'
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

const Services = () => {
    const ServiceData = [
        {
            image: 'worksite.jpg',
            alt: 'Worksite image',
            title: 'Preconstruction Planning',
            description: 'Use this area to describe this service. Why is it useful? Your clients will want to know what makes it a value-add for their project.'
        },
        {
            image: 'house.png',
            alt: 'House Image',
            title: 'Architectural Modelling',
            description: 'Use this area to describe this service. Why is it useful? Your clients will want to know what makes it a value-add for their project.'
        },
        {
            image: 'construction_woman.jpg',
            alt: 'Construction woman',
            title: 'Construction Management',
            description: 'Use this area to describe this service. Why is it useful? Your clients will want to know what makes it a value-add for their project.'
        }
    ]

    const ServiceCard = ({ image, alt, title, description }) => {
        return (
            <Card className=" max-w-96" radius='none'>
                <CardBody className='w-96 h-72'>
                    <Image
                        src={`/${image}`}
                        alt={alt}
                        fill
                        className='object-cover'
                    />
                </CardBody>

                <CardFooter className="py-6 px-8 flex-col items-start">
                    <h3 className='font-bold text-xl'>
                        {title}
                    </h3>

                    <p className="text-default-500">
                        {description}
                    </p>
                </CardFooter>
            </Card>
        )
    }
    return (
        <section id="Services" className='px-6 md:px-24 py-12'>
            <SectionHeader title='Services' />

            <div className='flex flex-col lg:flex-row justify-between gap-4 '>
                {ServiceData.map((data) => (
                    <ServiceCard 
                        {...data} 
                        key={data.title} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;