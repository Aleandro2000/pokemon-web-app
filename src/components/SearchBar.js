import { useState,useContext } from "react";

import { SearchResultContext } from "../context/SearchContext";
import { unique } from "../utils";

import Spinner from "./Spinner";

export default function SearchBar()
{
    const [searchResult,setSearchResult]=useContext(SearchResultContext);
    const [input,setInput]=useState("");

    const query=()=>{
        document.getElementById("search_loading").style.display="block";
        if(input)
        {
            let searchArr=input.toLowerCase().split(/[ ,]+/);
            setSearchResult([]);
            searchArr.forEach(element=>{
                fetch("/pokemon/"+element)
                    .then(response=>response.json())
                    .then(data=>{
                        if(data&&element)
                            setSearchResult(initial=>unique([...initial,{name: element, result: data}]))
                    });
            });
        }
        else
            setSearchResult();
        setTimeout(() => {
            document.getElementById("search_loading").style.display="none";
        },1000);
    }

    return(
        <>
            <span className="search-input input-group mb-3">
                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search a pokémon here!" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <span className="input-group-prepend" style={{cursor: "pointer"}} onClick={query}>
                    <span className="btn btn-light input-group-text" type="button" id="inputGroup-sizing-default"><i className="fa fa-search"/></span>
                </span>
            </span>
            <Spinner type="text-light" id="search_loading"/>
        </>
    );
}