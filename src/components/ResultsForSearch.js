import { useContext,useEffect,useState } from "react";

import { SearchResultContext } from "../context/SearchContext";

import Spinner from "./Spinner";
import ResultTable from "./ResultTable";

export default function ResultsForSearch()
{
    const [searchResult,setSearchResult]=useContext(SearchResultContext);
    const [render,setRender]=useState(0);
    const [pagesCount,setPagesCount]=useState(0);
    const [currentPage,setCurrentPage]=useState(0);
    const [pageIndex,setPageIndex]=useState(0);
    const [result, setResult]=useState([]);
    const [hasResult,setHasResult]=useState(false);

    const forward=() => {
        if(currentPage+1<pagesCount)
        {
            document.getElementById("loading").style.display="block";
            document.getElementById("result").style.display="none";
            setCurrentPage(currentPage+1);
            setPageIndex(pageIndex+2);
            setTimeout(() => {
                document.getElementById("loading").style.display="none";
                document.getElementById("result").style.display="table";
            },1000);
        }
    }

    const backward=() => {
        if(currentPage>0)
        {
            document.getElementById("loading").style.display="block";
            document.getElementById("result").style.display="none";
            setCurrentPage(currentPage-1);
            setPageIndex(pageIndex-2);
            setTimeout(() => {
                document.getElementById("loading").style.display="none";
                document.getElementById("result").style.display="table";
            },1000);
        }
    }

    useEffect(()=>{
        if(!searchResult||!searchResult.length)
        {
            fetch("/pokemon?offset="+currentPage*8+"&limit="+8)
                .then(response=>response.json())
                .then(data=>{
                    if(data.count%8)
                        setPagesCount(Math.floor(data.count/8)+1);
                    else
                        setPagesCount(Math.floor(data.count/8));
                    setResult(data.results);
                });
            setHasResult(false);
        }
        else
        {
            setResult(searchResult);
            if(searchResult.length%8)
                setPagesCount(Math.floor(searchResult.length/8)+1);
            else
                setPagesCount(Math.floor(searchResult.length/8));
            setHasResult(true);
        }
        setTimeout(() => {
            setRender(prev=>prev+1)
        },500);
    },[render,currentPage,searchResult]);

    return(
        <div className="container content">
            <br/>
            {
                result ? (
                    <>
                        <br/>
                        <Spinner id="loading"/>
                        <ResultTable hasResult={hasResult} result={result} currentPage={currentPage} pageIndex={pageIndex}/>
                        <br/>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <span className="page-link" onClick={backward} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only"/>
                                </span>
                            </li>
                            <li className="page-item"><span className="page-link">{currentPage+1}</span></li>
                            <li className="page-item">
                                <span className="page-link" onClick={forward} aria-label="Next">
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