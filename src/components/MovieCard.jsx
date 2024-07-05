/* eslint-disable react/prop-types */
import { formatDate } from "../../utils";
import Link from "next/link"; // Import Link from next/link
const MovieCard = ({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    first_air_date,
    name,
    media_type,
}) => {
    const imageUrl = `https://media.themoviedb.org/t/p/original${poster_path}`;

    // Define the pathname based on media_type
    const pathname = title ? `/movie/${id}` : `/tv/${id}`;

    return (
        <Link href={{ pathname }}>
            <div
                key={id}
                className="w-56 h-100 rounded-lg overflow-hidden shadow-sm shadow-zinc-300-500 m-2 flex flex-col relative min-h-[350px] min-w-[200px] bg-gradient-to-r from-[#30BBCE] to-[#06B4E6] hover:from-[#2E9DC4] hover:to-[#0597C2]"
            >
                <img
                    className="w-full h-2/3 object-cover"
                    src={imageUrl}
                    alt={title || name}
                />

                <div className="absolute bottom-15 left-2 top-2 bg-[#30BBCE] text-white rounded-full flex items-center justify-center w-8 h-8 font-semibold hover:text-black">
                    <span className="text-center p-2">
                        {parseFloat(vote_average).toFixed(1)}
                    </span>
                </div>
                <div className="px-4 py-2 flex-1 flex flex-col justify-between">
                    <div className="font-bold text-md mb-1 overflow-hidden">
                        <p className="text-white truncate">{title || name}</p>
                    </div>
                    <p className="text-gray-200 text-sm">
                        <span className="whitespace-normal break-all">
                            {release_date
                                ? formatDate(release_date)
                                : formatDate(first_air_date)}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
