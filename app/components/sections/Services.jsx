import Image from 'next/image';
import SectionHeader from '../comps/SectionHeader'
import {Card, CardBody, CardFooter} from "@heroui/card";
import WorksiteImage from '@/public/worksite.jpg'
import HouseImage from '@/public/house.png'
import ConstructionWomanImage from '@/public/construction_woman.jpg'

const Services = () => {
    const ServiceData = [
        {
            image: WorksiteImage,
            alt: 'Worksite image',
            title: 'Site Planning & Strategy',
            description: 'We will help you map out your website with clarity and purpose. From your layout to service descriptions, every element will be designed to convert visitors to clients.'
        },
        {
            image: HouseImage,
            alt: 'House Image',
            title: 'Visual Identity & Branding',
            description: 'Your brand deserves more than a logo. We craft cohesive  colors, typography, and imagery that reflects your professionalism and builds trust with your audience.'
        },
        {
            image: ConstructionWomanImage,
            alt: 'Construction woman',
            title: 'Mobile-Optimized Design',
            description: 'Whether your clients are on-site or mobile, your website will look sharp and load fast across all devices. Built with modern tech and responsive layouts.'
        }
    ]

    const ServiceCard = ({ image, alt, title, description }) => {
        return (
            <Card className="" radius='none'>
                <CardBody className=''>
                    <Image
                        src={image}
                        alt={alt}
                        className='object-cover h-56'
                    />
                </CardBody>

                <CardFooter className="py-6 px-8 flex-col">
                    <h3 className='font-bold text-xl text-center'>
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
        <section id="Services" className='max-w-7xl py-12 mx-auto px-8 lg:px-0'>
            <SectionHeader title='What We Offer' />

            <div className='flex flex-col md:flex-row justify-between gap-4 '>
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