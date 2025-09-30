import Image from "next/image";
import SectionHeader from "../comps/SectionHeader";
import WorkerImage from '@/public/workers.jpg';
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

const About = () => {
    return (
        <section id="About">
            
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 py-12 px-8 lg:px-20">
                    <SectionHeader title='Built for Growth'/>

                    <p className='pb-4'>
                        This template showcases our Growth Package. A modular, scalable, and easily customized website. This layout is ideal for service-based industries such as contractors, or service providers who want a professional web presence without the wait or bloat from overstuffed webpages. Every section is editable, every layout is optimized, and every detail is designed to grow with your business.
                    </p>

                    <p className='pb-8'>
                        Take note how all necessary information is consolidated into the single page spread across key sections. This keeps the client engaged and informed without being overwhelming with too much content. The call to action buttons are strategically placed to guide clients towards engaging. Project pages can be added to further build out this website as needed.
                    </p>

                    <div className='pb-4 text-center'>
                        <Button
                            as={Link}
                            color="primary"
                            size="lg"
                            href={siteConfig.company.lead}
                            variant="solid"
                            radius="sm"
                            className="text-black w-full md:w-auto"
                            >
                            Get Started Today
                        </Button>
                    </div>
                </div>

                <div className="w-full h-96 lg:h-[36rem] lg:w-1/2 bg-red-50 relative">
                    <div className="w-full min-h-full">
                        <Image 
                            src={WorkerImage}
                            alt="Worker image"
                            className="object-cover border-l-primary lg:border-l-8 border-t-primary border-t-8"
                            fill
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default About;