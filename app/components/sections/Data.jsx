import React from "react";

const Data = () => {
    const NumbersData = [
        {
            title: '2021',
            desc: 'Year Founded'
        },
        {
            title: '10+',
            desc: 'Optimized Projects'
        },
        {
            title: '100%',
            desc: 'Custom-Built Websites'
        },
        {
            title: '∞',
            desc: 'Scalable Possibilities'
        }
    ]
    return (
        <section id="Data" className="py-20 bg-primary">
            <div className="flex flex-wrap justify-between items-center  max-w-7xl mx-auto">
                {NumbersData.map(({ title, desc }, index) => (
                    <div key={index} className="flex flex-row m-auto">
                        <div className="text-center">
                            <h3 className="font-bold text-5xl">
                                {title}
                            </h3>

                            <p className="text-lg italic">
                                {desc}
                            </p>
                        </div>                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Data;