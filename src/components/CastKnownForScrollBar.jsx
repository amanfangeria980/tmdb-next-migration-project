/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import useFetchData from "../hooks/useFetchData";

const CastKnownForScrollBar = ({ castId }) => {
    const [data, setData] = useState(null);
    const scrollContainerRef = useRef(null);

    const res = useFetchData(
        `https://api.themoviedb.org/3/person/${castId}/combined_credits`
    );

    useEffect(() => {
        setData(res);
        // console.log(res);
    }, [res]);

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
        <div className="w-full h-full relative overflow-x-auto scrollbar-hide ">
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
                style={{ width: `${data?.cast.length * 150}px` }}
            >
                {data?.cast.map((item, index) => (
                    <Link
                        href={
                            item.media_type === "movie"
                                ? `/movie/${item.id}`
                                : `/tv/${item.id}`
                        }
                        key={index}
                    >
                        <div className="flex items-center border-2 rounded-lg  bg-white h-full flex-col min-w-[150px] min-h-[350px] text-center">
                            <img
                                className="w-full h-[70%] object-fit rounded-t-lg"
                                src={`https://media.themoviedb.org/t/p/original${item.poster_path}`}
                            ></img>
                            <div className="font-bold mt-2">{item.title}</div>
                            <div className="mt-2">{item.character}</div>
                        </div>
                    </Link>
                ))}
                ``
            </div>
        </div>
    );
};

export default CastKnownForScrollBar;
