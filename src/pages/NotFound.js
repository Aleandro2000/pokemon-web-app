import pokemonBall from "../img/pokemonBall.png";

import { useHistory } from "react-router-dom";

export default function NotFound()
{
    const history=useHistory();

    return(
        <center className="container text-container vertical-center" style={{marginTop: "100px"}}>
            <img alt="" src={pokemonBall} className="pokemon-ball"/>
            <br/><br/><br/>
            <h2>
                Page not found! :(
            </h2>
            <br/>
            <button className="btn btn-light" onClick={history.goBack}>
                Back
            </button>
        </center>
    )
}