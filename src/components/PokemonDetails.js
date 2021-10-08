import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext,DescriptionContext } from "../context/DetailsContext";

export default function PokemonDetails()
{
    const [details,setDetails]=useContext(DetailsContext);
    const [description,setDescription]=useContext(DescriptionContext);

    if(details)
        return(
            <div className="container content">
                <br/><br/>
                <div className="card">
                    <div className="card-body">
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
                            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </center>
                        <h5 className="card-title" align="center">
                            {details.name.toUpperCase()}
                        </h5>
                        <br/>
                        <center className="container row">
                            <div className="col m-3">
                                <b>Height</b><span className="badge badge-dark">{details.result.height}</span>
                            </div>
                            <div className="col m-3">
                                <b>Weight</b><span className="badge badge-dark">{details.result.weight}</span>
                            </div>
                            <div className="col m-3">
                                <b>Base Experience</b><span className="badge badge-dark">{details.result.base_experience}</span>
                            </div>
                            <div className="col m-3">
                                <b>Types</b>
                                {
                                    details.result.types.map((item,index)=>{
                                        return(
                                            <span className="badge badge-dark rounded-badge" key={index}>
                                                {item.type.name}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </center>
                        <br/>
                        <center className="container row">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-expanded="true">
                                        Abilities
                                    </li>
                                    {
                                        details.result.abilities.map((item,index)=>{
                                            return(
                                                <li className="list-group-item" key={index}>
                                                    {item.ability.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-expanded="true">
                                        Stats
                                    </li>
                                    {
                                        details.result.stats.map((item,index)=>{
                                            return(
                                                <li className="list-group-item" key={index}>
                                                    {item.stat.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </center>
                        <br/><br/><br/>
                        <p align="center">
                            {description}
                        </p>
                    </div>
                </div>
                <br/>
            </div>
        );
    else
        return <Redirect to="/home"/>;
}