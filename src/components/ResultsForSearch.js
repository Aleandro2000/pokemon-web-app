import { useContext,useEffect,useState } from "react";

import { SearchContext } from "../context/SearchContext";
import Spinner from "./Spinner"

export default function ResultsForSearch()
{
    const [search,setSearch]=useContext(SearchContext);
    const [render,setRender]=useState(0);
    const [pagesCount,setPagesCount]=useState(1);
    const [currentPage,setCurrentPage]=useState(1);
    const [result, setResult]=useState([]);

    const forward=() => {
        if(currentPage<pagesCount)
        {
            document.getElementById("loading").style.display="block";
            document.getElementById("result").style.display="none";
            setCurrentPage(currentPage+1);
            setTimeout(() => {
                document.getElementById("loading").style.display="none";
                document.getElementById("result").style.display="table";
            },1000);
        }
    }

    const backward=() => {
        if(currentPage>1)
        {
            document.getElementById("loading").style.display="block";
            document.getElementById("result").style.display="none";
            setCurrentPage(currentPage-1);
            setTimeout(() => {
                document.getElementById("loading").style.display="none";
                document.getElementById("result").style.display="table";
            },1000);
        }
    }

    const setPage=(page)=>{
        if(page>=1&&page<pagesCount-2)
        {
            document.getElementById("loading").style.display="block";
            document.getElementById("result").style.display="none";
            setCurrentPage(page);
            setTimeout(() => {
                document.getElementById("loading").style.display="none";
                document.getElementById("result").style.display="table";
            },1000);
        }
    }

    useEffect(()=>{
        fetch("/pokemon?offset="+currentPage*8+"&limit="+8)
            .then(response=>response.json())
            .then(data=>{
                if(!search||!search.length)
                {
                    if(data.count%8)
                        setPagesCount(Math.floor(data.count/8)+1);
                    else
                        setPagesCount(Math.floor(data.count/8));
                    setResult(data.results);
                }
                else
                {
                    data.results=data.results.filter((element=>{
                        for(let index in search)
                            if(element.name.toLowerCase().includes(search[index]))
                                return true;
                        return false;
                    }));
                    data.count=data.results.length;
                    if(data.count%8)
                        setPagesCount(Math.floor(data.count/8)+1);
                    else
                        setPagesCount(Math.floor(data.count/8));
                    setResult(data.results);
                }
            });
        setTimeout(() => {
            setRender(prev=>prev+1)
        },500);
    },[render]);

    return(
        <div className="container content">
            <br/>
            {
                result ? (
                    <>
                        <br/>
                        <Spinner id="loading"/>
                        <div className="container" id="result">
                            <div className="row" id="result">
                                {
                                    result.slice(0,4).map((item,index)=>{
                                        return(
                                            <div className="col" key={index}>
                                                <div className="container" id="result">
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
                                    result.slice(4,8).map((item,index)=>{
                                        return(
                                            <div className="col" key={index}>
                                                <div className="container" id="result">
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
                        <br/>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <span className="page-link" style={{cursor: "pointer"}} onClick={backward} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only"/>
                                </span>
                            </li>
                            <li className="page-item"><span className="page-link" style={{cursor: "pointer"}} onClick={()=>setPage(currentPage-1)}>{currentPage}</span></li>
                            <li className="page-item"><span className="page-link" style={{cursor: "pointer"}} onClick={()=>setPage(currentPage+1)}>{currentPage+1}</span></li>
                            <li className="page-item"><span className="page-link" style={{cursor: "pointer"}} onClick={()=>setPage(currentPage+2)}>{currentPage+2}</span></li>
                            <li className="page-item">
                                <span className="page-link" style={{cursor: "pointer"}} onClick={forward} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only"/>
                                </span>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                    </>
                )
            }
            <br/>
        </div>
    );
}