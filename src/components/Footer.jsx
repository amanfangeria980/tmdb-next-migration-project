/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const Footer = () => {
    return (
        <div className="w-full bg-[#03233E] h-[300px] flex justify-evenly items-center  text-white p-2">
            <div className="flex flex-col md:scale-125">
                <div className="w-32 h-32 flex items-center justify-center rounded-full mr-4">
                    <Image
                        src="/assets/images/logo2.svg"
                        height={170}
                        width={170}
                        className="max-h-20"
                    />
                    {/* <img src="/assets/images/logo2.svg" alt="" /> */}
                </div>
                <button className="bg-white md:w-[100%] w-[125px] text-[#27BAD2] font-bold py-2 px-4 rounded">
                    Join Now!
                </button>
            </div>
            <div className="flex md:mt-16 md:gap-10 gap-4 md:scale-105 justify-center">
                <div className="flex md:flex-row flex-col md:gap-10">
                    <div className="flex flex-col">
                        <span className="font-bold md:text-xl text-lg">
                            THE BASICS
                        </span>
                        <span className="text-sm">About TMDB</span>
                        <span className="text-sm">Contact Us</span>
                        <span className="text-sm">Support Forums</span>
                        <span className="text-sm">API</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold md:text-xl text-lg">
                            GET INVOLVED
                        </span>
                        <span className="text-sm">Contribution Bible</span>
                        <span className="text-sm">Add New Movie</span>
                        <span className="text-sm">Add New TV Show</span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-10 gap-8">
                    <div className="flex flex-col">
                        <span className="font-bold md:text-xl text-lg">
                            COMMUNITY
                        </span>
                        <span className="text-sm">Guidelines</span>
                        <span className="text-sm">Discussions</span>
                        <span className="text-sm">Leaderboard</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold md:text-xl text-lg">
                            LEGAL
                        </span>
                        <span className="text-sm">Terms of Use</span>
                        <span className="text-sm">API Terms of Use</span>
                        <span className="text-sm">Privacy Policy</span>
                        <span className="text-sm">DMCA Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
