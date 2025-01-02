import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
                {/* Left Section: Steps */}
                <div className="lg:w-1/2 space-y-8 mr-24">
                    <h2 className="text-3xl font-bold text-gray-800">How it Works</h2>
                    <p className="text-gray-600">
                        These are the simple procedures that will make your purchasing process super easy and smooth. And will help you to get your flight easily.
                    </p>
                    <div className="space-y-8 ml-12">
                        {/* Step 1 */}
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 font-bold text-lg rounded-full mr-4">
                                1
                            </div>
                            <p className="text-gray-700 font-medium">Search Flights</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 font-bold text-lg rounded-full mr-4">
                                2
                            </div>
                            <p className="text-gray-700 font-medium">Fill Contact Form</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 font-bold text-lg rounded-full mr-4">
                                3
                            </div>
                            <p className="text-gray-700 font-medium">Choose Your Airline</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 font-bold text-lg rounded-full mr-4">
                                4
                            </div>
                            <p className="text-gray-700 font-medium">Booking in 10 Minutes!</p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Video */}
                <div className="lg:w-1/2 mt-10 lg:mt-32">
                    <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: '12px' }}>
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/qRDLPRifIbE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '12px' }}
                        ></iframe>
                    </div>
                    <p className="text-center text-gray-500 mt-4">
                        Costa Victoria Cochin, Maldives - 3 Days + 3 Nights
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;