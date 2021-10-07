import { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";

export default function PokemonDetails()
{
    const [details,setDetails]=useContext(DetailsContext);

    return(
        <div className="container content">
            <br/>
            <div className="card text-card">
                <div className="card-body">
                    <h5 className="card-title">{details.name.toUpperCase()}</h5>
                </div>
            </div>
            <br/>
        </div>
    );
}