import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-customBlack text-gray-300 py-6 px-4 md:py-10 md:px-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Social Media Links */}
                <div className="flex flex-col items-start">
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-xl">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-xl">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-xl">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <p className="text-sm">
                        Join us on our social media platforms to stay updated with the latest travel deals, tips, and stories. We are committed to making your travel experience unforgettable.
                    </p>
                </div>

                {/* Quick Links */}
                <div className='mt-8 md:mt-0'>
                    <h3 className="font-bold mb-4 text-gray-300">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">Submit Article</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Freebies</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Pricing</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='mt-8 md:mt-0'>
                    <h3 className="font-bold mb-4 text-gray-300">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <i className="fas fa-phone-alt mr-2"></i> {/* Telephone icon */}
                            (888) 231 4522 258
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i> {/* Location icon */}
                            3129 Doctors Drive, Los Angeles, California, USA
                        </li>
                    </ul>
                </div>

                {/* Gallery Showcase */}
                <div className='mt-8 md:mt-0'>
                    <h3 className="font-bold mb-4 text-gray-300">Gallery Showcase</h3>
                    <div className="grid grid-cols-3 gap-2">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/img-064716445-16x9_0.jpg?VersionId=0xpiAlkmXR1PBo_aZWAOljVy9ssxqJSV&size=690:388" alt="Travel Destination 2" className="w-full h-auto object-cover" />
                        <img src="https://images.aircharterservice.com/content/travel-destinations-in-asia-tokyo-2.jpg" alt="Travel Destination 3" className="w-full h-auto object-cover" />
                        <img src="https://www.hindustantimes.com/ht-img/img/2023/09/23/550x309/nature_1695470384319_1695470390283.jpg" alt="Travel Destination 6" className="w-full h-auto object-cover" />
                        <img src="https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/destination/m_bali_l_393_629.jpg" alt="Travel Destination 4" className="w-full h-auto object-cover" />
                        <img src="https://www.newswire.lk/wp-content/uploads/2024/01/Sri-Lanka-Forbes.jpg" alt="Travel Destination 6" className="w-full h-auto object-cover" />
                        <img src="https://drprem.com/travel/wp-content/uploads/sites/53/2013/11/cheap-travel-destinations.jpg" alt="Travel Destination 1" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-customMaroon h-2 mt-8"></div>
        </footer>
    );
};

export default Footer;