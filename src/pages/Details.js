import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PokemonDetails from "../components/PokemonDetails";
import Footer from "../components/Footer";

export default function Details()
{
    return(
        <div className="fadeIn">
            <Navbar/>
            <Header type="default"/>
            <PokemonDetails/>
            <Footer/>
        </div>
    )
}