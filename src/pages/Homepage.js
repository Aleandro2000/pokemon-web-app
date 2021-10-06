import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Homepage()
{
    return(
        <div className="fadeIn">
            <Navbar type="default"/>
            <Header type="default"/>
            <About/>
            <Footer/>
        </div>
    );
}