import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import * as parallaxStyles from './styles/MouseParallax.module.scss'

function MouseParallax (props){
    let windowWidth;
    let windowHeight;

    useEffect(()=>{
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        const onresize = () => {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        }
        window.addEventListener('onresize', onresize)
    })

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

    return (
        <section className={ parallaxStyles.container + ' ' + background } style={ { backgroundPosition: mousePos } } onMouseMove={ parallax } role='banner'>
            <div className="row">
                { graphic }
                <div className="single">
                    { props.children }
                </div>
            </div>
        </section>
    )
    
}
export default MouseParallax;