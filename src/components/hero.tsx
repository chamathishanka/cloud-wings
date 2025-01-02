import heroImage from '@/assets/images/heroImage.jpg';
import homeMobileImage from '@/assets/images/homeMobile.jpg';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <div className="relative w-full h-auto">
            <picture>
                <source srcSet={homeMobileImage} media="(max-width: 600px)" />
                <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-1/3 left-0 transform -translate-y-1/2 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] p-4 text-white text-left ml-4 sm:ml-8 md:ml-16 lg:ml-36">
                <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl mt-40">Explore the World Together with Premium travel</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-2 ml-1">Get up to 50% Discount</p>
                <Button className="mt-4 px-6 py-2 bg-customMaroon text-white rounded-full flex items-center">
                    Book Now
                    <span className="ml-2 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                        <svg className="w-4 h-4 text-customMaroon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Hero;