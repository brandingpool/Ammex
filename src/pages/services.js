import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import MouseParallax from '../components/MouseParallax'
import ScheduleVisit from '../components/ScheduleVisit'

function services() {
    return (
        <Layout>
            <MouseParallax page="services">
                <h4>Food supply</h4>
                <h1 className="mt30">Working hard<br/>and deliver on time</h1>
            </MouseParallax>
            <section>
                <div className="row v-align">
                    <div className="half">
                        <h3>We supply well</h3>
                        <h5>We are proud of our work because everytime we supply markets and local restaurants with food, we also bring well- being to our community.</h5>
                    </div>
                    <div className="half">
                        <StaticImage
                            src="../images/AMX_Web-FoodSupply-02-Clip(Se-remplazara).jpg"
                            alt=""
                            placeholder="dominantColor"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="single">
                        <StaticImage
                            src="../images/AMX_Web-FoodSupply-03-ImgBanner.jpg"
                            alt="Meat --- Diary --- Groceries"
                            placeholder="tracedSVG"
                            quality={ 100 }
                        />
                    </div>
                </div>
                <div className="row">
                    <StaticImage
                        src="../images/AMX_Web-About-03-Img.jpg"
                        alt=""
                        placeholder="dominantColor"
                        quality={ 100 }
                        className="half"
                    />
                    <div className="half bg-red">
                        <h3>Products</h3>
                        <h6>
                            <ul>
                                <li>Beef</li>
                                <li>Poultry (Chicken / Turkey)</li>
                                <li>Pork</li>
                                <li>Lamb</li>
                                <li>Offal</li>
                                <li>Diary Products</li>
                                <li>Dry goods</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="half">
                        <h2>We got your back no matter what</h2>
                    </div>
                </div>
            </section>
            <ScheduleVisit />
        </Layout>
    )
}

export default services
