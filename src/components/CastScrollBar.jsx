/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Link from "next/link";

const CastScrollBar = ({ id, media_type }) => {
    const [data, setData] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

            console.log(apiUrl);
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();
                setData(result.cast || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 150;
            if (direction === "next") {
                scrollContainerRef.current.scrollLeft += scrollAmount;
            } else if (direction === "prev") {
                scrollContainerRef.current.scrollLeft -= scrollAmount;
            }
        }
    };

    return (
        <div className="w-full h-full relative overflow-x-hidden">
            <button
                className="transform -translate-y-1/2 absolute left-4 top-1/2 bg-[#032541] text-white rounded-full h-[50px] items-center justify-center flex w-[50px]"
                onClick={() => handleScroll("prev")}
            >
                <GrFormPrevious />
            </button>
            <button
                className="absolute transform -translate-y-1/2 right-4 top-1/2 bg-[#032541] text-white rounded-full h-[50px] items-center justify-center flex w-[50px]"
                onClick={() => handleScroll("next")}
            >
                <MdNavigateNext />
            </button>
            <div
                ref={scrollContainerRef}
                className="flex gap-[20px] flex-row items-center h-full overflow-x-scroll scroll-smooth scrollbar-hide"
                style={{ width: `${data.length * 150}px` }}
            >
                {data.map((cast, index) => (
                    <Link href={`/cast/${cast.id}`} key={index}>
                        <div className="flex items-center border-2 rounded-lg  bg-white h-[35vh] flex-col min-w-[150px] overflow-y-hidden">
                            {cast.profile_path ? (
                                <img
                                    className="w-full h-[70%] object-fit rounded-t-lg"
                                    src={`https://media.themoviedb.org/t/p/original${cast.profile_path}`}
                                ></img>
                            ) : (
                                <img
                                    className="w-full h-[70%] object-fit rounded-t-lg"
                                    src="/assets/images/blank_profile.jpeg"
                                ></img>
                            )}
                            <div className="h-[30%] p-2 flex-col  items-start justify-start w-full">
                                <div className="font-bold mt-2">
                                    {cast.name}
                                </div>
                                <div className=" flex w-full mt-2">
                                    {cast.character}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                ``
            </div>
        </div>
    );
};

export default CastScrollBar;
