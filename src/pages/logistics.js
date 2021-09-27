import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Column from '../components/Column'
import Layout from '../components/Layout'
import MouseParallax from '../components/MouseParallax'
import Services from '../components/Services'
import Row from '../components/Row'

function logistics() {
    return (
        <Layout>
            <MouseParallax page="logistics">
                <h4>3PL Logistics</h4>
                <h1>Teamwork<br/>and Logistics</h1>
            </MouseParallax>
            <section>
                <Row>
                    <Column size={10}>
                        <StaticImage
                            src="../images/AMX_Web-3PLServices-02-Arrow.png"
                            alt="arrow"
                            placeholder="tracedSVG"
                        />
                        <h2 className="pt30">One stop solution for handling and exporting food products.</h2>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <h5>We are a one stop solution, leaders of a consolidated binational supply community with more than 30 years in this business and the bigger exporter in southern california as we export more than 100 loads a week.</h5>
                    </Column>
                </Row>
            </section>
            <Services/>
        </Layout>
    )
}

export default logistics
