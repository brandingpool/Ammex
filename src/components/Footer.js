import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import * as footerStyles from './styles/footer.module.scss'

function Footer(props){
    return(
        <footer>
            <div className="row pb0">
                <div className="half">
                    <h6>We care, we deliver, we supply well.</h6>
                </div>
            </div>
            <div className="row pb0">
                <div className="half">
                    <StaticImage
                        src="../images/logotype-ammex.png"
                        alt=""
                    />
                </div>
                <div className="half">
                    <p className={ footerStyles.contactInfo }> 
                        <a href="tel:+16196717700">619 671 7700</a> | fax: 619 671 7811<br/>
                        7780 Waterville Road, San Diego, CA 92154
                    </p>
                    <StaticImage
                        src="../images/icon-ammex.png"
                        alt="ammex icon"
                        className={ footerStyles.icon }
                    />
                </div>
            </div>
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