import { Link } from "react-router-dom";

import mobile from "../img/pokemon-phone.svg";

import SearchBar from "./SearchBar";

export default function Header(props)
{
    switch(props.type)
    {
        case "default":
            return(
                <div class="p-5 text-center header">
                    <div className="row header-content">
                        <div className="col">
                            <h1 class="mb-3">Pokémon</h1>
                            <h4 class="mb-3">Gotta Catch 'Em All</h4>
                            <Link class="btn btn-light" to="/search" role="button"><i className="fa fa-search"/> Search Pokémons</Link>
                        </div>
                        <div className="col">
                            <img alt="" src={mobile} className="pokemon-mobile"/>
                        </div>
                    </div>
                </div>
            );
        default:
            return(
                <div class="p-5 text-center header">
                    <div className="row header-content">
                        <div className="col">
                            <br/>
                            <SearchBar/>
                        </div>
                        <div className="col">
                            <img alt="" src={mobile} className="pokemon-mobile"/>
                        </div>
                    </div>
                </div>
            );
    }
}