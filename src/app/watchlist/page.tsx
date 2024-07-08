"use client";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import { FaBookmark } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const WatchList = () => {
    const [bookmarks, setBookmarks] = useState(
        JSON.parse(
            typeof window !== "undefined" && localStorage.getItem("bookmarks")
        ) || []
    );

    const removeFromWatchList = (id) => {
        const updatedBookmarks = bookmarks.filter(
            (bookmark) => bookmark.id !== id
        );
        setBookmarks(updatedBookmarks);
        if (typeof window !== "undefined")
            localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold mb-4 text-center m-2 p-2">
                Watchlist <FaBookmark className="inline" color="orange" />
            </h1>
            <div className="flex flex-wrap md:flex-row flex-col justify-center min-h-[500px]">
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark) => (
                        <div key={bookmark.id} className="relative">
                            <MovieCard {...bookmark} />
                            <div className="absolute top-3 right-2">
                                <TiDeleteOutline
                                    className="text-3xl cursor-pointer"
                                    color="orange"
                                    onClick={() =>
                                        removeFromWatchList(bookmark.id)
                                    }
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-3xl m-auto font-bold text-gray-500">
                        No items found...
                    </div>
                )}
            </div>
        </div>
    );
};

export default WatchList;
