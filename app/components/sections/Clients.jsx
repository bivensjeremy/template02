import Image from "next/image";
import SectionHeader from "../comps/SectionHeader";

const Clients = () => {
    const NumbersData = [
        {
            title: 'logo01.jpg',
            desc: 'Est.'
        },
        {
            title: '200',
            desc: 'Projects Completed'
        },
        {
            title: '900',
            desc: 'Contractors Appointed'
        },
        {
            title: '10',
            desc: 'Awards Won'
        }
    ]

    const BusinessLogos = [ 'logo01.jpg', 'logo02.jpg', 'logo03.jpg', 'logo04.jpg']

    return (
        <section id="Clients" className="px-24 py-12 ">
            <SectionHeader title="Clients" />

            <div className="flex flex-row justify-between items-center">
                {BusinessLogos.map(logo => (
                    <div key={logo} className="w-72 ">
                        <Image
                            src={`/${logo}`}
                            alt='Business Logo'
                            width={200}
                            height={200}
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>


        </section>
    );
}

export default Clients;