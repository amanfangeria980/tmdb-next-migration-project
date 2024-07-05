export function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return formattedDate;
}

export const trendingOptions = [
    {
        label: "Today",
        value: "today",
        apiUrl: "https://api.themoviedb.org/3/trending/all/day",
    },
    {
        label: "This Week",
        value: "thisWeek",
        apiUrl: "https://api.themoviedb.org/3/trending/all/week",
    },
];

export const popularOptions = [
    {
        label: "Featured",
        value: "featured",
        apiUrl: "https://api.themoviedb.org/3/movie/popular",
    },
    {
        label: "Shows",
        value: "shows",
        apiUrl: "https://api.themoviedb.org/3/tv/popular",
    },
    {
        label: "Top Rated",
        value: "rated",
        apiUrl: "https://api.themoviedb.org/3/movie/top_rated",
    },
    {
        label: "Latest",
        value: "latest",
        apiUrl: "https://api.themoviedb.org/3/trending/all/week",
    },
];

export function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
        return `${remainingMinutes}m`;
    } else if (remainingMinutes === 0) {
        return `${hours}h`;
    } else {
        return `${hours}h ${remainingMinutes}m`;
    }
}

export const getPathColor = (percentage) => {
    if (percentage < 50) {
        const greenValue = Math.round((percentage / 50) * 255);
        return `rgb(255, ${greenValue}, 0)`;
    } else {
        const redValue = Math.round(((100 - percentage) / 50) * 255);
        return `rgb(${redValue}, 255, 0)`;
    }
};

export const getGender = (gender) => {
    if (gender == "1") return "Female";
    else return "Male";
};

export const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
};
