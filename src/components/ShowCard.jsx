/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { formatDate, formatRuntime } from "./../../utils";
import { FaHeart, FaBookmark, FaPlay } from "react-icons/fa";
import ProgressCircle from "./ProgressCircle";
import { useCredentials } from "./../context/UserContext";
import { useRouter } from "next/navigation";

const ShowCard = ({ obj }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { isLoggedIn } = useCredentials();
    const router = useRouter();

    useEffect(() => {
        const favorites =
            JSON.parse(
                typeof window !== "undefined" &&
                    localStorage.getItem("favorites")
            ) || [];
        const bookmarks =
            JSON.parse(
                typeof window !== "undefined" &&
                    localStorage.getItem("bookmarks")
            ) || [];
        setIsFavorite(favorites.some((item) => item.id === obj.id));
        setIsBookmarked(bookmarks.some((item) => item.id === obj.id));
    }, [obj]);

    const toggleFavorite = () => {
        if (!isLoggedIn) {
            alert("Please login to add to favorites.");
            router.push("/login");
            return;
        }

        setIsFavorite(!isFavorite);
        const favorites =
            JSON.parse(
                typeof window !== "undefined" &&
                    localStorage.getItem("favorites")
            ) || [];
        const updatedFavorites = isFavorite
            ? favorites.filter((item) => item.id !== obj.id)
            : [...favorites, obj];
        localStorage.setItem(
            "favorites",
            typeof window !== "undefined" && JSON.stringify(updatedFavorites)
        );
    };

    const toggleBookmark = () => {
        if (!isLoggedIn) {
            alert("Please login to bookmark.");
            router.push("/login");
            return;
        }

        setIsBookmarked(!isBookmarked);
        const bookmarks =
            JSON.parse(
                typeof window !== "undefined" &&
                    localStorage.getItem("bookmarks")
            ) || [];
        const updatedBookmarks = isBookmarked
            ? bookmarks.filter((item) => item.id !== obj.id)
            : [...bookmarks, obj];
        if (typeof window !== "undefined")
            localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    };

    const imageUrl = `https://media.themoviedb.org/t/p/original${obj.poster_path}`;
    const genreNames = obj.genres.map((genre) => genre.name).join(", ");

    return (
        <div className="flex flex-col md:flex-row  md:px-8 lg:px-16 items-center gap-6 h-full">
            <div
                key={obj.id}
                className="w-full  md:rounded-lg md:h-[90%] h-[55%] md:w-1/3 lg:w-1/4 flex flex-col shadow-sm shadow-zinc-300-500 bg-gradient-to-r from-[#30BBCE] to-[#06B4E6] overflow-hidden hover:from-[#2E9DC4] hover:to-[#0597C2]"
            >
                <img
                    className="w-full  md:h-[95%] object-cover"
                    src={imageUrl}
                    alt={obj.title || obj.name}
                />

                <div className="px-4 py-2 flex-1 flex flex-col justify-between">
                    <div className="font-bold text-md mb-1 overflow-hidden">
                        {/* <p className="text-white truncate text-center"></p> */}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 flex px-4 flex-col gap-3 md:gap-4">
                <div className="flex gap-2 flex-wrap">
                    <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                        {obj.title || obj.name}
                    </div>
                    <div className="text-[#DACFCD] text-xl md:text-2xl lg:text-3xl">
                        (
                        {(obj.release_date || obj.first_air_date)?.substring(
                            0,
                            4
                        )}
                        )
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-center flex-wrap">
                    <div className="border border-white text-white rounded-md text-sm md:text-base lg:text-lg p-1">
                        PG-13
                    </div>
                    <div className="text-white text-sm md:text-base lg:text-lg">
                        {formatDate(obj.release_date || obj.first_air_date)}
                    </div>
                    <div className="text-white text-sm md:text-base lg:text-lg">
                        {genreNames}
                        {obj.runtime && (
                            <span className="ml-2 text-white text-sm md:text-base lg:text-lg">
                                {formatRuntime(obj.runtime)}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-center">
                    <div className="flex text-white font-bold flex-col">
                        <ProgressCircle
                            percentage={Math.round(obj.vote_average * 10)}
                        />
                    </div>
                    <div className="flex">
                        <div className="text-lg md:text-xl lg:text-2xl hover:scale-125">
                            🤯
                        </div>
                        <div className="text-lg md:text-xl lg:text-2xl hover:scale-125">
                            😍
                        </div>
                        <div className="text-lg md:text-xl lg:text-2xl hover:scale-125">
                            🙂
                        </div>
                    </div>
                    <div className="bg-[#032541] gap-1 px-2 py-1 flex rounded-full text-white text-sm md:text-base lg:text-lg font-semibold items-center">
                        What's your{" "}
                        <span
                            className="underline"
                            style={{ textDecorationColor: "blue" }}
                        >
                            vibe!
                        </span>
                        <div
                            className="bg-white text-xs md:text-sm h-4 md:h-5 text-[#032541] w-4 md:w-5 flex items-center 
          justify-center font-bold rounded-full ml-1"
                        >
                            i
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div
                        className={`bg-[#032541] text-sm md:text-base h-10 w-10 flex items-center 
          justify-center font-bold rounded-full cursor-pointer ${
              isFavorite ? "text-red-500" : "text-white"
          }`}
                        onClick={toggleFavorite}
                    >
                        <FaHeart />
                    </div>
                    <div
                        className={`bg-[#032541] text-sm md:text-base h-10 w-10 flex items-center 
          justify-center font-bold rounded-full cursor-pointer ${
              isBookmarked ? "text-yellow-500" : "text-white"
          }`}
                        onClick={toggleBookmark}
                    >
                        <FaBookmark />
                    </div>
                    <div className="text-white flex items-center gap-2 font-semibold cursor-pointer">
                        <FaPlay />
                        Play Trailer
                    </div>
                </div>
                {obj.tagline && (
                    <div className="font-semibold text-sm md:text-base lg:text-lg text-[#DACFCD]">
                        {obj.tagline}
                    </div>
                )}
                <div className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                    Overview
                </div>
                <div className="text-white text-sm md:text-base lg:text-lg">
                    {obj.overview}
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
