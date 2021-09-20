import * as React from "react"
import MouseParallax from "../components/MouseParallax"
import { StaticImage } from "gatsby-plugin-image"

import '../styles/main.scss'
import Layout from "../components/Layout"
import Card from "../components/Card"
import ScheduleVisit from "../components/ScheduleVisit"

const IndexPage = () => {
  return (
    <Layout>
      <MouseParallax page="home" graphic="AMX_Web-Home-01-BannerPrincipal-Grafico.png">
        <h1>We care, we deliver,<br/>we supply well.</h1>
      </MouseParallax>
      <section className="bg-red">
        <div className="row space-around relative custom-row-1">
          <Card>
            <div className="title">
              <h3>Food<br/>Supply</h3>
              <button>KNOW MORE</button>
            </div>
            <StaticImage
              src="../images/AMX_Web-Home-02-BoxImg-FoodSupply.jpg"
              as="figure"
              alt=""
              quality={ 100 }
              width={ 593 }
              aspectRatio={ 16/5 }
              objectPosition="center"
            />
          </Card>
          <Card>
            <div className="title">
              <h3>3PL<br/>Services</h3>
              <button>KNOW MORE</button>
            </div>
            <StaticImage
              src="../images/AMX_Web-Home-02-BoxImg-3PLService.jpg"
              alt=""
              as="figure"
              quality={ 100 }
              width={ 593 }
              aspectRatio={ 16/5 }
              objectPosition="center"
            />
          </Card>
        </div>
        <div className="row v-align">
          <div className="half">
            <h2>Let’s help you<br/>grow your business!</h2>
          </div>
          <div className="half text-center">
            <button className="light">CONTACT US</button>
          </div>
        </div>
        <div className="row">
          <div className="half">
            <h5>We are the bridge that connects our clients with products of the the highest quality, small businesses with large producers, and our people with new opportunities. </h5>
          </div>
          <div className="half text-center">
            <StaticImage 
              src="../images/AMX_Web-Home-03-Img-Bridge.png"
              placeholder="blurred"
              alt="bridge"
              quality={ 100 }
            />
          </div>
        </div>
        <div className="row">
        <div className="quarter">
          <ul className="check h7">
            <li>Fast friendly service</li>
            <li>Inventory to guarantee supply</li>
            <li>Same day delivery</li>
          </ul>
        </div>
        <div className="quarter">
          <ul className="check h7">
            <li>Quality guaranteed</li>
            <li>Wide variety of products</li>
            <li>Top brands</li>
          </ul>
        </div>
        <div className="quarter">
          <ul className="check h7">
            <li>Usda facility</li>
            <li>Strategic location</li>
            <li>Customer service</li>
          </ul>
        </div>
        <div className="quarter">
          <ul className="check h7">
            <li>Technical support</li>
          </ul>
        </div>
        </div>
      </section>
      <section>
        <div className="row v-align pb0">
          <div className="half">
            <h3>Breaking  supply chains to build supply communities</h3>
            <p>We want to be your ally, because we believe that when we support local restaurants and markets we also bring well-being to our community.</p>
          </div>
          <div className="half p0">
            <StaticImage
              src="../images/AMX_Web-Home-04-Img.jpg"
              placeholder="blurred"
              alt=""
              className="cover-width"
              quality={ 100 }
            />
          </div>
        </div>
        <div className="row v-align pt0 pb0">
          <div className="half p0">
            <StaticImage
              src="../images/AMX_Web-Home-05-Img.jpg"
              placeholder="blurred"
              alt=""
              className="cover-width"
              quality={ 100 }
            />
          </div>
          <div className="half">
            <h3>Work together to grow together</h3>
            <p>At Ammex, we grow every time our clients reach their business goals as they keep trusting us to satisfy the needs of their companies. Which is why we are committed to be as reliable as a longtime friend.</p>
          </div>
        </div>
        <div className="row v-align pt0">
          <div className="half">
            <h4>+20 years</h4>
            <h3>A one of a kind family business</h3>
            <p>We have been working as a family to reach our goals for more than 20 years. Today, we work from one of the largest plants in California and the only one of its kind certified by the USDA.</p>
          </div>
          <div className="half p0">
            <StaticImage
              src="../images/AMX_Web-Home-06-Img.jpg"
              placeholder="blurred"
              alt=""
              className="cover-width"
              quality={ 100 }
            />
          </div>
        </div>
      </section>
      <ScheduleVisit />
    </Layout>
  )
}

export default IndexPage
