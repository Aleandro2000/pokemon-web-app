import {useState} from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ResultsForSearch from "../components/ResultsForSearch";
import { SearchContext } from "../context/SearchContext";
import Footer from "../components/Footer";

export default function Search()
{
    const [search,setSearch]=useState("");

    return(
        <SearchContext.Provider value={[search,setSearch]}>
            <Navbar/>
            <Header/>
            <ResultsForSearch/>
            <Footer/>
        </SearchContext.Provider>
    )
}