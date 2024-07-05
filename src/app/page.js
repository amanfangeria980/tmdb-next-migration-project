import HeaderBar from "../components/HeaderBar";
import SearchBox from "../components/SearchBox";
import React from "react";
import { popularOptions, trendingOptions } from "../../utils";

const App = () => {
    return (
        <div>
            <SearchBox />
            <HeaderBar options={trendingOptions} title="Trending" />
            <HeaderBar options={popularOptions} title="What's Popular" />
        </div>
    );
};

export default App;
