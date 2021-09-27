import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Column from './Column';
import Row from './Row';
import * as styles from './styles/schedule.module.scss'

function ScheduleVisit() {

    const open = styles.opened;
    const [ togglePopUp, setpopUpToggle] = useState('');

    const popUp = ()=>{
        if(togglePopUp === ''){
            setpopUpToggle(open);
        }
        else{
            setpopUpToggle('');
        }
    }
    return (
        <>
        <section className={"bg-red " + styles.container}>
            <Row>
                <Column size={6}>
                    <h2>Let's meet and talk</h2>
                    <p>We work with an open-door policy to all our friends and clients.</p>
                </Column>
                <Column size={6}>
                    <button className={ styles.circle } onClick={ popUp }>SCHEDULE<br/>A VISIT</button>
                </Column>
                <div className={ styles.dots }>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Row>
        </section>
        <section className={ styles.popUp + ' ' + togglePopUp }>
                <div className={ styles.card }>
                    <button className={ styles.close } onClick={ popUp }>
                        <svg>
                            <line className={ styles.st0 } x1="0" y1="0" x2="14.14" y2="14.14"/>
                            <line className={ styles.st0 } x1="0" y1="14.14" x2="14.14" y2="0"/>
                        </svg>
                    </button>
                    <Row>
                        <div className="single">
                            <StaticImage
                                src="../images/icon-ammex.png"
                                alt="Ammex icon"
                                className="mb30"
                            />
                            <h5>Please enter your contact info</h5>
                            <p>We will contact you as soon as possible to generate your appointment.</p>
                        </div>
                    </Row>
                    <Row>
                        <form className={ styles.form }>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                name="firstName"
                            />
                            <button>
                                SEND
                            </button>
                        </form>
                    </Row>
                </div>
        </section>
        </>
    )
}

export default ScheduleVisit
