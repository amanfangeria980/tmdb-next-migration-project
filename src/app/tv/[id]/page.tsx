/* eslint-disable react/prop-types */
"use client";
import { useParams } from "next/navigation";
import useFetchData from "../../../hooks/useFetchData";
import ShowCard from "../../../components/ShowCard";
import CastScrollbar from "../../../components/CastScrollBar";

const ShowPage = () => {
    const params = useParams();

    let apiUrl = `https://api.themoviedb.org/3/tv/${params.id}`;

    const data = useFetchData(apiUrl);
    console.log("Fetched data:", data);

    return (
        <div>
            {data ? (
                <div
                    className="relative h-[120vh] md:h-[75vh] bg-left-top bg-[length:140%_140%] w-full "
                    style={{
                        backgroundImage: `url(https://media.themoviedb.org/t/p/original${data?.backdrop_path})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative h-full w-full">
                        <ShowCard obj={data} />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <div className="mx-5 font-bold text-xl mt-2">Cast Details: </div>
            <div className="relative mt-4 h-[40vh] mx-4 my-2">
                <CastScrollbar id={params.id} media_type={"tv"} />
            </div>
        </div>
    );
};

export default ShowPage;
