import Image from "next/image";
import SectionHeader from "../comps/SectionHeader";
import SampleBusiness from "@/public/sample_business_logo-removebg-preview.png";

const Clients = () => {
    const BusinessLogos = [ 'logo01.jpg', 'logo02.jpg', 'logo03.jpg', 'logo04.jpg']

    return (
        <section id="Clients" className="max-w-7xl mx-auto py-12 ">
            <SectionHeader title="Your Trusted Clients" />

            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto">
                {BusinessLogos.map(logo => (
                    <div key={logo} className="mx-auto">
                        <Image
                            src={SampleBusiness}
                            alt='Sample Business Logo'
                            className=""
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clients;