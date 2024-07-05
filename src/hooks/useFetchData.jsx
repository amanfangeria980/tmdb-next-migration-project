import { useState, useEffect } from "react";

const useFetchData = (apiUrl) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${apiUrl}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
                );
                console.log(
                    `${apiUrl}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
                );
                if (!response.ok) {
                    throw new Error(
                        `Error fetching data: ${response.statusText}`
                    );
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error(`Error fetching data:`, error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return data;
};

export default useFetchData;
