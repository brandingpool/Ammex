import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Header(props){
    return(
        <header>
            <div>
                <StaticImage 
                    src="../images/logo-ammex.png"
                    alt="Ammex logo"
                />
            </div>
            <nav></nav>
        </header>
    )
}
export default Header;