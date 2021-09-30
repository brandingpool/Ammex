import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Column from "./Column";
import Row from "./Row";

import * as footerStyles from './styles/footer.module.scss'

function Footer(props){
    const [ contact, setContact ] = useState(<Desktop/>)
    useEffect(() => {
        if(window.innerWidth > 990){
            setContact(<Desktop/>)
        }
        else{
            setContact(<Mobile/>)
        }
        const resize = () => {
            if(window.innerWidth > 990){
                setContact(<Desktop/>)
            }
            else{
                setContact(<Mobile/>)
            }
        }
        window.addEventListener('resize', resize)

        return ''

    }, [])

    return(
        <footer>
            <Row padding="b" className={"v-align " + footerStyles.footer_menu}>
                <Column size={3} mobile={4}>
                    <h6>We care, we deliver, we supply well.</h6>
                </Column>
                <Column size={6} className={ footerStyles.footer_links }>
                    <Link to='/about' className="h7">About Us</Link>
                    <Link to='/services' className="h7">Services</Link>
                    <Link to='/facilities' className="h7">Facilities</Link>
                    <Link to='/contact' className="h7">Contact</Link>
                </Column>
            </Row>
            { contact }
            <div className={ footerStyles.divider }></div>
            <div className={ footerStyles.legal }>
                <p>&#169; 2021 Ammex. All Rights Reserved.</p>
                <div>
                    <a href="###" className={ footerStyles.social }>
                        <StaticImage
                            src="../images/facebook-ammex.png"
                            alt="Ammex Facebook"
                        />
                    </a>
                    <a href="###" className={ footerStyles.social }>
                        <StaticImage
                            src="../images/instagram-ammex.png"
                            alt="Ammex Facebook"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

function Desktop(){
    return(
        <Row padding="b">
            <Column size={6}>
                <StaticImage
                    src="../images/logotype-ammex.png"
                    alt=""
                />
            </Column>
            <Column size={6}>
                <p className={ footerStyles.contactInfo }> 
                    <a href="tel:+16196717700">619 671 7700</a> | fax: 619 671 7811<br/>
                    7780 Waterville Road, San Diego, CA 92154
                </p>
                <StaticImage
                    src="../images/icon-ammex.png"
                    alt="ammex icon"
                    className={ footerStyles.icon }
                />
            </Column>
        </Row>
    )
}
function Mobile(){
    return(
        <>
        <Row>
            <Column mobile={3}>
                <p className={ footerStyles.contactInfo }> 
                    <a href="tel:+16196717700">619 671 7700</a> | fax: 619 671 7811<br/>
                    7780 Waterville Road, San Diego, CA 92154
                </p> 
            </Column>
        </Row>
        <Row>
            <Column mobile={2}>
                <StaticImage
                    src="../images/logotype-ammex.png"
                    alt=""
                />
            </Column>
            <Column mobile={2}>
                <StaticImage
                    src="../images/icon-ammex.png"
                    alt="ammex icon"
                    className={ footerStyles.icon }
                />
            </Column>
        </Row>
        </>
    )
}