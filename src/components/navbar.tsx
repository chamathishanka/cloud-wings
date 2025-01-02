import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg text-gray-300 py-5 px-10 fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">

                    <span className="text-lg font-bold text-customMaroon ml-28 mr-28">CloudWings</span>
                    <ul className="flex space-x-12 ml-6">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Agents</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                    />
                    <a href="#" className="hover:text-white">Sign In</a>
                    <span className="text-white">|</span>
                    <a href="#" className="hover:text-white">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;