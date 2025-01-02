import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-8">
            <div className="relative w-full" style={{ maxWidth: '150px' }}>
                <input
                    type="text"
                    placeholder="Search Flights"
                    className="w-full px-4 py-3 border-none rounded-full text-sm text-white bg-customMaroon placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 border-2 border-white">
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;