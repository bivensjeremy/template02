import Image from "next/image";
import SectionHeader from "../comps/SectionHeader";

const About = () => {
    return (
        <section id="About">
            
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-24 py-12">
                    <SectionHeader title={'About'} />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </div>

                <div className="w-full h-96 md:h-auto md:w-1/2 bg-red-50 relative">
                    <div className="w-full min-h-full absolute border-l-primary md:border-l-8 border-t-primary border-t-8">
                    <Image 
                        src='/workers.jpg'
                        alt="Worker image"
                        fill
                        className="object-cover"

                    />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default About;