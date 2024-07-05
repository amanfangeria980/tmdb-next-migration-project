/* eslint-disable react/prop-types */
import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieScrollBar = ({ data }) => {
    const scrollContainerRef = useRef(null);

    const handleWheelScroll = (e) => {
        const container = scrollContainerRef.current;
        container.scrollLeft += e.deltaY;
    };
    return (
        <div className="m-4">
            <ul
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide"
                onWheel={handleWheelScroll}
            >
                {data.map((movie) => {
                    return (
                        <li key={movie.id.toString()}>
                            <MovieCard {...movie} />{" "}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MovieScrollBar;
