import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/search" component={Search}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
