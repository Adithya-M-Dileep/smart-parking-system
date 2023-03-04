import React from "react"
import { Link } from "react-router-dom";

function Navbar(){
    return(<div class="navbar">
    <Link className="HomeLink" to="/">CAR PARKING SYSTEM</Link>
    <Link className="AnalysisLink" to="/analysis">Analysis</Link>
</div>);
            
}

export default Navbar;