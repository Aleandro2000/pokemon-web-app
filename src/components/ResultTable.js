import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DetailsContext } from "../context/DetailsContext";

export default function ResultTable(props)
{
    const [details,setDetails]=useContext(DetailsContext);
    const history=useHistory();

    const gotoDetails=(pokemon)=>{
        setDetails(pokemon);
        history.push("/details");
    }
    
    return(
        <>
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