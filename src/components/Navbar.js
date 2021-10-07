/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link,useHistory } from "react-router-dom";

import logo from "../img/logo.png";

export default function Navbar(props)
{
    const history=useHistory();
    
    switch(props.type)
    {
        case "default":
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">
                        <img alt="" src={logo} className="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-home"/>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><i className="fa fa-info-circle"/>About</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search"><i className="fa fa-search"/>Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        default:
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <Link className="navbar-brand" to="/home">
                        <img alt="" src={logo} className="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className="nav-link"style={{cursor: "pointer"}} onClick={history.goBack}><i className="fa fa-arrow-left"/>Back</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
    }
}