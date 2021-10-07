import {useState} from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ResultsForSearch from "../components/ResultsForSearch";
import { SearchResultContext } from "../context/SearchContext";
import Footer from "../components/Footer";

export default function Search()
{
    const [searchResult,setSearchResult]=useState([]);

    return(
        <div className="fadeIn">
            <SearchResultContext.Provider value={[searchResult,setSearchResult]}>
                <Navbar/>
                <Header/>
                <ResultsForSearch/>
                <Footer/>
            </SearchResultContext.Provider>
        </div>
    )
}