import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import Column from './Column'
import Row from './Row'

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
        <Row>
            <Column size={3}>
                <ol className="h7">
                    <li 
                    onMouseOver={ ()=>{ area(0) } }
                    onFocus={ () => { area(0) } }>
                        Dry area storage
                    </li>
                    <li
                    onMouseOver={ ()=>{ area(1) } }
                    onFocus={ () => { area(0) } }>
                        Fully racked sections
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(2) } }
                    onFocus={ () => { area(0) } }>
                        Refrigerated cold storage
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(3) } }
                    onFocus={ () => { area(0) } }>
                        Freezer cold storage
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(4) } }
                    onFocus={ () => { area(0) } }>
                        Full staging area
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(5) } }
                    onFocus={ () => { area(0) } }>
                        Electric equipment
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(6) } }
                    onFocus={ () => { area(0) } }>
                        17 docks
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(7) } }
                    onFocus={ () => { area(0) } }>
                        Truck packing
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(8) } }
                    onFocus={ () => { area(0) } }>
                        Refrigerated transportation
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(9) } }
                    onFocus={ () => { area(0) } }>
                        USDA exporting plant
                    </li>
                    <li 
                    onMouseOver={ ()=>{ area(10) } }
                    onFocus={ () => { area(0) } }>
                        In - House custom agency
                    </li>
                </ol>
            </Column>
            <Column size={9}>
                { image }
            </Column>
        </Row>
    )
}

export default Facilities
