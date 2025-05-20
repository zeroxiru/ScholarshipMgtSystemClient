import React from 'react';

const ScholarshipBridgeOfOpportunity = () => {
    const timelineData = [
        { year: "2020", title: "Foundation Laid", description: "Our platform was born with a vision to connect talented students with life-changing scholarship opportunities." },
        { year: "2021", title: "First Connections", description: "We forged partnerships with educational institutions, facilitating the placement of 100 students with scholarships." },
        { year: "2022", title: "Expanding Horizons", description: "Our reach extended to new fields of study, with 500 students receiving scholarships in various disciplines." },
        { year: "2023", title: "Strengthening Bonds", description: "We introduced online application support, achieving a 98% success rate and assisting 2,000 students in securing funding." },
        { year: "2024", title: "A Milestone Crossed", description: "We celebrated 5,000 successful placements, with a turnover of $10 million and a growing team of 15 dedicated specialists." },
        { year: "2025", title: "A Global Impact", description: "Serving over 10,000 students, we're now a trusted name in scholarship facilitation, with an expanding network of educational partners." },
    ];

    return (
        <div className="py-12 bg-gray-100 mt-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">The Bridge of Opportunity</h2>
                <p className="text-gray-600 text-center mb-12">
                    Our journey is a bridge we've built, connecting talent to opportunity, year by year. Each segment of this bridge represents a milestone in our mission to change lives.
                </p>

                <div className="relative">
                    {/* Center Dashed Line */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-0"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, transparent 50%, #d1d5db 50%)',
                            backgroundSize: '100% 20px',
                            backgroundRepeat: 'repeat-y',
                        }}
                    ></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timelineData.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className="grid grid-cols-9 items-start relative z-10">
                                    {/* Left side */}
                                    {isLeft ? (
                                        <>
                                            <div className="col-span-4 flex justify-end">
                                                <div className="bg-white rounded-lg shadow-md p-4 max-w-md text-left ">
                                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                                    <p className="mt-2 text-gray-600 ">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-1 flex items-center justify-center">
                                                <div className="w-10 h-10 rounded-full border-4 bg-[#f6795d] flex items-center justify-center">
                                                    <span className="text-white font-semibold text-sm">{item.year}</span>
                                                </div>
                                            </div>
                                            <div className="col-span-4"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-span-4"></div>
                                            <div className="col-span-1 flex items-center justify-center">
                                                <div className="w-10 h-10 rounded-full border-4 bg-[#f6795d] flex items-center justify-center">
                                                    <span className="text-white font-semibold text-sm">{item.year}</span>
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex justify-start">
                                                <div className="bg-white rounded-lg shadow-md p-4 max-w-md text-left">
                                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                                    <p className="mt-2 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipBridgeOfOpportunity;
