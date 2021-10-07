import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import { SearchResultContext } from "./context/SearchContext";
import { DetailsContext } from "./context/DetailsContext";

export default function App() {
  const [searchResult,setSearchResult]=useState([]);
  const [details,setDetails]=useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home" component={Homepage}/>
        <DetailsContext.Provider value={[details,setDetails]}>
          <SearchResultContext.Provider value={[searchResult,setSearchResult]}>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/details" component={Details}/>
          </SearchResultContext.Provider>
        </DetailsContext.Provider>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
