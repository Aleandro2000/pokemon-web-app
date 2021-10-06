import { useState,useContext } from "react";

import { SearchContext } from "../context/SearchContext";

export default function SearchBar()
{
    const [search,setSearch]=useContext(SearchContext);
    const [input,setInput]=useState(search);

    const query=()=>{
        setSearch(input);
    }

    return(
        <span className="search-input input-group mb-3">
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search a pokémon here!" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <span className="input-group-prepend" style={{cursor: "pointer"}} onClick={query}>
                <span className="btn btn-light input-group-text" type="button" id="inputGroup-sizing-default"><i className="fa fa-search"/></span>
            </span>
        </span>
    );
}