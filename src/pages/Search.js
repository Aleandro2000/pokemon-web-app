import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ResultsForSearch from "../components/ResultsForSearch";
import Footer from "../components/Footer";

export default function Search()
{

    return(
        <div className="fadeIn">
            <Navbar/>
            <Header/>
            <ResultsForSearch/>
            <Footer/>
        </div>
    )
}