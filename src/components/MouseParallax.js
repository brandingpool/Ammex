import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import Column from "./Column";
import Row from "./Row";
import * as parallaxStyles from './styles/MouseParallax.module.scss'

function MouseParallax (props){
    const [ windowWidth, setWindowWidth ] = useState(0)
    const [ windowHeight, setWindowHeight ] = useState(0)

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

        const onresize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
        window.addEventListener('onresize', onresize)
    }, [])

    const [mousePos, setPosition] = useState('50% 50%');
    const [graphicTop, setTop] = useState('-5%')
    const [graphicRight, setRight] = useState('-5%')
    const parallax = (e) => {
        let posX = Math.floor((e.clientX * 100) / windowWidth)
        let posY = Math.floor((e.clientY * 100) / windowHeight)
        
        setPosition( posX + '% ' + posY + '%')

        let graphicX = ((posX / 100) * 5 ) - 5
        let graphicY = (posY / 100) * - 5
        setRight(graphicX + '%')
        setTop(graphicY + '%')
        //console.log(graphicX)
    }

    let graphic;
    let background;
    if( props.page === 'home'){
        graphic = <StaticImage
                    src="../images/AMX_Web-Home-01-BannerPrincipal-Grafico.png"
                    alt=""
                    placeholder="none"
                    className={ parallaxStyles.graphic }
                    style={ { top: graphicTop, right: graphicRight } }
                  />
        background = parallaxStyles.home
    }
    else if( props.page === "about" ){
        background = parallaxStyles.about
    }
    else if( props.page === "services" ){
        background = parallaxStyles.services
    }
    else if( props.page === "facilities"){
        background = parallaxStyles.facilities
    }
    else if( props.page === "logistics"){
        background = parallaxStyles.logistics
    }

    return (
        <section className={ parallaxStyles.container + ' ' + background } style={ { backgroundPosition: mousePos } } onMouseMove={ parallax } role='banner'>
            <Row>
                { graphic }
                <Column className="single">
                    { props.children }
                </Column>
            </Row>
        </section>
    )
    
}
export default MouseParallax;