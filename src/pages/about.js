import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import MouseParallax from '../components/MouseParallax'
import ScheduleVisit from '../components/ScheduleVisit'

function About() {
    return (
        <Layout>
            <MouseParallax page="about">
                <h4>+20 years</h4>
                <h1 className="mt30">Teamwork<br/>
                can make a big<br/>
                difference</h1>
            </MouseParallax>
            <section className="bg-red">
                <div className="row">
                    <div>
                        <h5>Our team is ready to respond on call, always there to take down any order no matter the size because we know that sometimes all it takes to keep growing is to sell another box - or pallet.</h5>
                    </div>
                    <div>
                        <StaticImage 
                            src="../images/white-icon-ammex.png"
                            alt=""
                            placeholder="tracedSVG"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="single">
                        <h2>We work with leadership, excellence and transparency</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="row v-align pt0 pb0">
                    <div className="half p0">
                        <StaticImage
                        src="../images/AMX_Web-About-03-Img.jpg"
                        placeholder="dominantColor"
                        alt=""
                        className="cover-width"
                        quality={ 100 }
                        />
                    </div>
                    <div className="half">
                        <h3>Experience and infrastructure</h3>
                        <p className="mt30">We have more than 20 years of experience distributing products from one of the largest plants in California and the only one of its kind certified by the USDA.</p>
                        <button className="mt50">CHECK OUR FACILITIES</button>
                    </div>
                </div>
                <div className="row v-align pt0">
                    <div className="half">
                        <h3>Wide availability</h3>
                        <p className="mt30">Thanks to our relationship with the largest food producers in the United States, we are able to secure and offer wide availability of high demand, premium and specialty products.</p>
                        <button className="mt50">CHECK OUR FACILITIES</button>
                    </div>
                    <div className="half p0">
                        <StaticImage
                        src="../images/AMX_Web-About-04-Img.jpg"
                        placeholder="dominantColor"
                        alt=""
                        className="cover-width"
                        quality={ 100 }
                        />
                    </div>
                </div>
                <div className="row v-align">
                    <div className="half">
                        <h2>Working together to grow together</h2>
                        <p className="mt30">We grow every time our clients reach their business goals as they keep trusting us to supply the most important needs of their companies. Which is why we are committed to be as reliable as a longtime friend.</p>
                    </div>
                    <div className="half">
                        <StaticImage
                            src="../images/AMX_Web-About-05-Img.png"
                            alt=""
                            placeholder="tracedSVG"
                        />
                    </div>
                </div>
            </section>
            <ScheduleVisit />
        </Layout>
    )
}

export default About
