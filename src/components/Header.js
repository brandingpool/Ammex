import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Column from "./Column";
import Row from "./Row";

function Header(props){
    return(
        <header>
            <Row padding="small" className="v-align">
                <Column size={8}>
                    <Link to='/'>
                        <StaticImage 
                            src="../images/logo-ammex.png"
                            alt="Ammex logo"
                        />
                    </Link>
                </Column>
                <Column size={4} className="flex space-between">
                    <Link to='/about' className="h7">About Us</Link>
                    <Link to='/services' className="h7">Services</Link>
                    <Link to='/facilities' className="h7">Facilities</Link>
                    <Link to='/contact' className="h7">Contact</Link>
                </Column>
            </Row>
            <nav></nav>
        </header>
    )
}
export default Header;