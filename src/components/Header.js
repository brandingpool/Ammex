import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Column from "./Column";
import Row from "./Row";

import * as headerStyles from './styles/header.module.scss'

function Header(){

    const [ menu, setMenu ] = useState(<DesktopMenu/>)
    useEffect(() => {
        if(window.innerWidth > 1200){
            setMenu(<DesktopMenu/>)
        }
        else{
            setMenu(<MobileMenu/>)
        }
        const resize = () => {
            if(window.innerWidth > 1200){
                setMenu(<DesktopMenu/>)
            }
            else{
                setMenu(<MobileMenu/>)
            }
        }
        window.addEventListener('resize', resize)

        return ''

    }, [])
    
    return(
        <header>
            { menu }
        </header>
    )
}
export default Header;

function DesktopMenu(){
    return(
        <Row padding="small" className="v-align">
            <Column size={8}>
                <Link to="/">
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
    )
}
function MobileMenu(){
    const closed = headerStyles.closed
    const opened = headerStyles.opened
    const [ toggle, setToggle ] = useState(closed)

    const toggleTrigger = () => {
        if(toggle === closed){
            setToggle(opened)
        }
        else{
            setToggle(closed)
        }
    }
    return(
        <>
        <Row padding="small" className="v-align">
            <Column size={6}>
                <Link to="/">
                    <StaticImage 
                        src="../images/logo-ammex.png"
                        alt="Ammex logo"
                    />
                </Link>
            </Column>
            <Column size={6} className="text-right">
                <a href="###" onClick={ toggleTrigger }>
                    <StaticImage
                        src="../images/hamburger-ammex.png"
                        alt="Mobile menu"
                        quality={ 100 }
                    />
                </a>
            </Column>
        </Row>
        <Row className={ headerStyles.mobile_menu + ' ' + toggle}>
            <Column className="flex space-between">
                <Link to='/about' className="h7">About Us</Link>
                <Link to='/services' className="h7">Services</Link>
                <Link to='/facilities' className="h7">Facilities</Link>
                <Link to='/contact' className="h7">Contact</Link>
            </Column>
        </Row>
        </>
    )
}