import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import Column from './Column'
import Row from './Row'

function MapParallax() {

    let windowWidth;
    let windowHeight;

    const xAmount = 50
    const yAmount = 50

    useEffect(()=>{
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        const onresize = () => {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        }
        window.addEventListener('onresize', onresize)
    })
    
    const [ mapPos, setMapPos ] = useState('0')
    const [ iconPos, setIconPos ] = useState('0')

    const parallax = e => {
        let posX = (e.clientX * 100) / windowWidth
        let posY = (e.clientY * 100) / windowHeight
        let mapPosX = (((posX - 50) * xAmount) / 100) * -1
        let mapPosY = (((posY - 50) * yAmount) / 100) * -1
        setMapPos(mapPosY + 'px 0 0 ' + mapPosX + 'px')
        let iconPosX = (((posX - 50) * (xAmount * 2)) / 100) * -1
        let iconPosY = (((posY - 50) * (yAmount * 2)) / 100) * -1
        setIconPos(iconPosY + 'px 0 0 ' + iconPosX + 'px')
    }
    return (
        <section onMouseMove={ parallax }>
                <Row>
                    <Column className="relative text-center">
                        <div className="smooth-transition" style={{ width: '100%', margin: mapPos }}>
                            <StaticImage
                                src="../images/AMX_Web-OurFacilities-04-BannerLocation-Back-01.png"
                                alt="map"
                                placeholder="dominantColor"
                                quality={ 100 }
                            />
                        </div>
                        <div style={ {width: '100%', boxSizing: 'border-box', position: 'absolute', top: 0, margin: iconPos } }>
                         <StaticImage
                            src="../images/AMX_Web-OurFacilities-04-BannerLocation-Front-02.png"
                            alt="map"
                            placeholder="dominantColor"
                            quality={ 100 }
                            style={ { width: "90%" } }
                        />
                        </div>
                    </Column>
                </Row>
            </section>
    )
}

export default MapParallax
