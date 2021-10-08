import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DetailsContext,DescriptionContext } from "../context/DetailsContext";

import Spinner from "./Spinner";

export default function ResultTable(props)
{
    // eslint-disable-next-line
    const [details,setDetails]=useContext(DetailsContext);
    // eslint-disable-next-line
    const [description,setDescription]=useContext(DescriptionContext);
    const history=useHistory();

    const gotoDetails=async (pokemon)=>{
        document.getElementById("open").style.display="block";
        setDetails();
        setDescription("");
        if(!pokemon.url)
        {
            setDetails(pokemon);
            await fetch(REACT_APP_API+"/pokemon-species/"+pokemon.result.id)
                .then(response=>response.json())
                .then(data=>{
                    for(let index in data.flavor_text_entries)
                        if(data.flavor_text_entries[index].language.name==="en")
                        {
                            setDescription(data.flavor_text_entries[index].flavor_text);
                            break;
                        }
                });
        }
        else
        {
            let response=await fetch(pokemon.url);
            let result=await response.json();
            setDetails({name: pokemon.name,result: result});
            response=await fetch(REACT_APP_API+"/pokemon-species/"+result.id);
            result=await response.json();
            for(let index in result.flavor_text_entries)
                if(result.flavor_text_entries[index].language.name==="en")
                {
                    setDescription(result.flavor_text_entries[index].flavor_text);
                    break;
                }
        }
        document.getElementById("open").style.display="none";
        history.push("/details");
    }
    
    return(
        <>
            <Spinner id="open"/>
            <br/>
            {
                !props.hasResult ? (
                    <div className="container" id="result">
                        <div className="row">
                        {
                            props.result.slice(0,4).map((item,index)=>{
                                return(
                                    <div className="col" key={index} onClick={()=>gotoDetails(item)}>
                                        <div className="container">
                                            <div className="card text-card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <br/>
                        <div className="row">
                        {
                            props.result.slice(4,8).map((item,index)=>{
                                return(
                                    <div className="col" key={index} onClick={()=>gotoDetails(item)}>
                                        <div className="container">
                                            <div className="card text-card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                ) : (
                    <div className="container" id="result">
                        <div className="row">
                        {
                            props.result.slice(props.pageIndex*4,(props.pageIndex+1)*4).map((item,index)=>{
                                return(
                                    <div className="col" key={index} onClick={()=>gotoDetails(item)}>
                                        <div className="container">
                                            <div className="card text-card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <br/>
                        <div className="row">
                        {
                            props.result.slice((props.pageIndex+1)*4,(props.pageIndex+2)*4).map((item,index)=>{
                                return(
                                    <div className="col" key={index} onClick={()=>gotoDetails(item)}>
                                        <div className="container">
                                            <div className="card text-card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name.toUpperCase()}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            }
        </>
    )
}