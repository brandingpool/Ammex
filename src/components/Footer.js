import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Column from "./Column";
import Row from "./Row";

import * as footerStyles from './styles/footer.module.scss'

function Footer(props){
    return(
        <footer>
            <Row padding="b" className="v-align">
                <Column size={3}>
                    <h6>We care, we deliver, we supply well.</h6>
                </Column>
                <Column size={6} className={ footerStyles.footer_links }>
                    <Link to='/about' className="h7">About Us</Link>
                    <Link to='/services' className="h7">Services</Link>
                    <Link to='/facilities' className="h7">Facilities</Link>
                    <Link to='/contact' className="h7">Contact</Link>
                </Column>
            </Row>
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