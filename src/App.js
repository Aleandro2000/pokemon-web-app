import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import { SearchResultContext,PageContext,IndexContext } from "./context/SearchContext";
import { DetailsContext,DescriptionContext } from "./context/DetailsContext";

export default function App()
{
  const [searchResult,setSearchResult]=useState([]);
  const [details,setDetails]=useState();
  const [description,setDescription]=useState("");
  const [currentPage,setCurrentPage]=useState(0);
  const [pageIndex,setPageIndex]=useState(0);

  return (
    <DetailsContext.Provider value={[details,setDetails]}>
      <DescriptionContext.Provider value={[description,setDescription]}>
        <SearchResultContext.Provider value={[searchResult,setSearchResult]}>
          <PageContext.Provider value={[currentPage,setCurrentPage]}>
            <IndexContext.Provider value={[pageIndex,setPageIndex]}>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home"/>
                  </Route>
                  <Route exact path="/home" component={Homepage}/>
                  <Route exact path="/search" component={Search}/>
                  <Route exact path="/details" component={Details}/>
                  <Route component={NotFound}/>
                </Switch>
              </BrowserRouter>
            </IndexContext.Provider>
          </PageContext.Provider>
        </SearchResultContext.Provider>
      </DescriptionContext.Provider>
    </DetailsContext.Provider>
  );
}
