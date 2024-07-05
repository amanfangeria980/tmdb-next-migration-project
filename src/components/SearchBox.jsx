"use client";
import { useState } from "react";
// import bgImage from "/assets/images/bgimage.webp";
const SearchBox = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="flex items-center justify-center">
            <div
                className="w-[90%] h-[360px] border border-black-100 bg-cover bg-center rounded-md flex flex-col justify-evenly"
                style={{
                    backgroundImage: `url('/assets/images/bgimage.webp')`,
                }}
            >
                <div>
                    <span className="font-bold text-4xl md:text-5xl block text-white px-8">
                        Welcome.
                    </span>
                    <span className="font-semibold text-xl md:text-3xl block text-white px-8">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                </div>
                <div className="text-center relative p">
                    <input
                        type="text"
                        placeholder="Search for a movie, tv show, person..."
                        className=" py-2 px-4 md:ml-[2.5%] rounded-full w-[80%] md:w-[80%] h-12 mb-5 focus:outline-none"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="text-white rounded-full bg-[#14CABB] px-4 py-2 h-12 font-semibold absolute right-4 md:right-16 lg:right-24 xl:right-28 "
                        onClick={() => console.log(searchText)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
