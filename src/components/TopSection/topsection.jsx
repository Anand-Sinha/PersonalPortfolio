import "./topsection.css";
import "./topsection.js";
import Aos from "aos";
import "aos/dist/aos.css";
import JQ from "jquery";

Aos.init({duration:500});
function topsection(){
    return (
    <div className="main">
    <div className="TS-Main">
        <div className="TS-NavBar" data-aos="fade" data-aos-duration="5000" data-aos-delay="300">
            <header>
                {/* <a href="#" className="logo">Logo</a>      */}
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>  
            </header>
        </div>
        <div className="introText" data-aos="fade" data-aos-duration="5000" data-aos-delay="500">
            <h1 style={{fontWeight:"100"}}><>Hello World, I'm<br /> <span style={{fontWeight:"900"}}>  {"<"}Anand Sinha{">"}</span> <p style={{fontWeight:"100", fontSize:"1.2rem", letterSpacing: "5px"}}>AND THIS IS MY RESUME.</p></></h1>  
        </div>
    </div>
    <div className="TS-Content row">
        <div className="sectionLeft " > 
            {/* <h1 className="test">Hello</h1> */}
        </div>
        <div className="sectionRight col">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
    </div>
    </div>);
}

export default topsection;