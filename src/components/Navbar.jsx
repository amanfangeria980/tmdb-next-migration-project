/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faHeart,
    faMagnifyingGlass,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { NavSearchBar } from "./NavSearchBar";
import { useCredentials } from "../context/UserContext";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const { user, isLoggedIn } = useCredentials();
    const router = useRouter();

    const handleNavigation = (path) => {
        if (!isLoggedIn) {
            alert("Please login to access this page.");
            router.replace("/login");
        } else {
            router.push(path);
        }
    };

    return (
        <>
            <div className="bg-[#032541] h-[10vh] md:h-[8vh] flex items-center shadow-md">
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/">
                                <span className="text-3xl font-bold text-white cursor-pointer mr-8 flex justify-center w-full">
                                    <Image
                                        src={"/assets/images/logo.png"}
                                        width={160}
                                        height={40}
                                        className="md:h-5 h-4"
                                    />
                                    {/* <img
                                        src="/assets/images/logo.png"
                                        alt=""
                                        className="md:h-5 h-4"
                                    /> */}
                                </span>
                            </Link>
                            <div className="flex items-center justify-center flex-grow">
                                <button
                                    onClick={() =>
                                        handleNavigation("/favourites")
                                    }
                                    className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-2"
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <button
                                    onClick={() =>
                                        handleNavigation("/watchlist")
                                    }
                                    className="text-xl text-[#2CBAD0] hover:text-gray-300 mx-4"
                                >
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {isLoggedIn && user ? (
                                <Link href="/profile">
                                    <span className="mr-4 text-white text-lg font-semibold">
                                        {user}
                                    </span>
                                </Link>
                            ) : (
                                <Link href="/login">
                                    <button className="mr-4 p-2 text-white text-lg hover:text-gray-300 font-semibold">
                                        Login
                                    </button>
                                </Link>
                            )}
                            <button className="p-2">
                                <FontAwesomeIcon
                                    icon={
                                        isSearchActive ? faX : faMagnifyingGlass
                                    }
                                    color={isSearchActive ? "white" : "#01B4E4"}
                                    size="lg"
                                    onClick={() =>
                                        setIsSearchActive(!isSearchActive)
                                    }
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isSearchActive && (
                <NavSearchBar setIsSearchActive={setIsSearchActive} />
            )}
        </>
    );
};

export default Navbar;
