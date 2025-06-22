import {Divider} from "@heroui/divider";
import React from "react";

const Data = () => {
    const NumbersData = [
        {
            title: '2025',
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
    return (
        <section id="Data" className="py-20 bg-primary">
            <div className="flex flex-wrap justify-between items-center">
                {NumbersData.map(({ title, desc }, index) => (
                    <div key={title} className="flex flex-row m-auto">
                        <div className="text-center">
                            <h3 className="font-bold text-6xl">
                                {title}
                            </h3>

                            <p className="text-xl">
                                {desc}
                            </p>
                        </div>

                        {/* {index < NumbersData.length - 1 && (
                            <div className="px-4 flex items-center w-full">
                                <Divider orientation="vertical"className="bg-blue-500 items-center text-center mx-auto flex flex-row w-full"/>
                            </div>
                        )} */}
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Data;