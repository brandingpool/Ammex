import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import Column from './Column'
import Row from './Row'

import * as facilityStyles from './styles/facilities.module.scss'

function Facilities() {
    
    const [ image, setImage ] = useState(<StaticImage
        src="../images/AMX_Web-OurFacilities-02-0-Warehouse.jpg"
        alt="hello"
    />)
    const area = (hovered) =>{
        switch(hovered){
            case 0:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-1-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 1:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-2-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 2:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-3-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 3:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-4-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 4:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-5-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 5:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-6-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 6:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-7-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 7:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-8-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 8:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-9-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 9:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-10-Warehouse.jpg"
                    alt="hello"
                />)
                break
            case 10:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-11-Warehouse.jpg"
                    alt="hello"
                />)
                break
            default:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-0-Warehouse.jpg"
                    alt="hello"
                />)
                break
        }
    }
    return (
        <Row padding="t">
            <Column size={3} mobile={4}>
                <ol className={"h7 " + facilityStyles.list }>
                    <li>
                        <a onMouseOver={ ()=>{ area(0) } } onFocus={ () => { area(0) } } href="###">
                            Dry area storage
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(1) } } onFocus={ () => { area(1) } } href="###">
                            Fully racked sections
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(2) } } onFocus={ () => { area(2) } } href="###">
                            Refrigerated cold storage
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(3) } } onFocus={ () => { area(3) } } href="###">
                            Freezer cold storage
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(4) } } onFocus={ () => { area(4) } } href="###">
                            Full staging area
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(5) } } onFocus={ () => { area(5) } } href="###">
                            Electric equipment
                        </a>
                    </li>

                    <li>
                        <a onMouseOver={ ()=>{ area(6) } } onFocus={ () => { area(6) } } href="###">
                            17 docks
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(7) } } onFocus={ () => { area(7) } } href="###">
                            Truck packing
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(8) } } onFocus={ () => { area(8) } } href="###">
                            Refrigerated transportation
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(9) } } onFocus={ () => { area(9) } } href="###">
                            USDA exporting plant
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={ ()=>{ area(10) } } onFocus={ () => { area(10) } } href="###">
                            In - House custom agency
                        </a>
                    </li>
                </ol>
            </Column>
            <Column size={9} mobile={4}>
                { image }
            </Column>
        </Row>
    )
}

export default Facilities