import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";

export default function PokemonDetails()
{
    const [details,setDetails]=useContext(DetailsContext);
    const history=useHistory();

    if(details&&details.name)
        return(
            <div className="container content">
                <br/>
                <div className="card">
                    <div className="card-body">
                        {
                            !details.url ? (
                                <>
                                    <center id="carousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                        {
                                            details.result.sprites.front_default ? (
                                                <div className="carousel-item active">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_default}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.back_default ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.back_default}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.front_female ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_female}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.back_female ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_female}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.front_shiny ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_shiny}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.back_shiny ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.back_shiny}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.front_shiny_female ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_shiny_female}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        {
                                            details.result.sprites.back_shiny_female ? (
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block" src={details.result.sprites.front_shiny_female}/>
                                                </div>
                                            ) : (<></>)
                                        }
                                        </div>
                                    </center>
                                    <h5 className="card-title" align="center">
                                        {details.name.toUpperCase()}
                                    </h5>
                                    <br/>
                                    <h6>
                                        <b>Height:</b> {details.result.height}
                                    </h6>
                                    <h6>
                                        <b>Weight:</b> {details.result.weight}
                                    </h6>
                                    <h6>
                                        <b>Base Experience:</b> {details.result.base_experience}
                                    </h6>
                                    <h6>
                                        <b>Abilities:</b>
                                        <ul>
                                            {
                                                details.result.abilities.map((item,index)=>{
                                                    return(
                                                        <li key={index}>
                                                            {item.ability.name}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </h6>
                                    <h6>
                                        <b>Types: </b>
                                        {
                                            details.result.types.map((item,index)=>{
                                                return(
                                                    <span className="badge badge-dark" key={index}>
                                                        {item.type.name}
                                                    </span>
                                                )
                                            })
                                        }
                                    </h6>
                                </>
                            ) : (
                                <>
                                </>
                            )
                        }
                    </div>
                </div>
                <br/>
            </div>
        );
    else
        return history.goBack();
}