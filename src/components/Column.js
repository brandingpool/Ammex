import React from 'react'
import * as columnStyles from './styles/grid.module.scss'

function Column( props ) {

    let size;
    switch(props.size){
        case 1:
            size = columnStyles.col_1
            break
        case 2:
            size = columnStyles.col_2
            break
        case 3:
            size = columnStyles.quarter
            break
        case 4:
            size = columnStyles.col_4
            break
        case 5:
            size = columnStyles.col_5
            break
        case 6:
            size = columnStyles.half
            break
        case 7:
            size = columnStyles.col_7
            break
        case 8:
            size = columnStyles.col_8
            break
        case 9:
            size = columnStyles.col_9
            break
        case 10:
            size = columnStyles.col_10
            break
        case 11:
            size = columnStyles.col_11
            break
        default: 
            size = columnStyles.single
            break
    }

    let padding;
    switch(props.padding){
        case "0":
            padding = columnStyles.cp0
            break
        default: 
            break
    }
    return (
        <div className={ size + ' ' +columnStyles.column + ' ' + props.className + ' ' + padding }>
            { props.children }
        </div>
    )
}

export default Column
