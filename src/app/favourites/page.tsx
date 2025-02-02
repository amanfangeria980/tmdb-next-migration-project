"use client";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import { FaHeart } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const Favourites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const saveFavoritesToLocalStorage = (updatedFavorites) => {
        try {
            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(updatedFavorites)
                );
            }
        } catch (error) {
            console.error(
                "Error while setting favorites in localStorage:",
                error
            );
        }
    };

    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.id !== id
        );
        setFavorites(updatedFavorites);
        saveFavoritesToLocalStorage(updatedFavorites);
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold mb-4 text-center m-2 p-2">
                Favourites <FaHeart className="inline" color="red" />
            </h1>
            <div className="flex flex-wrap md:flex-row flex-col justify-center min-h-[500px]">
                {favorites.length > 0 ? (
                    favorites.map((favorite) => (
                        <div key={favorite.id} className="relative">
                            <MovieCard {...favorite} />
                            <div className="absolute top-3 right-2">
                                <TiDeleteOutline
                                    className="text-3xl cursor-pointer"
                                    color="orange"
                                    onClick={() =>
                                        removeFromFavorites(favorite.id)
                                    }
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-3xl m-auto font-bold text-gray-500">
                        No favourites found...
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favourites;
