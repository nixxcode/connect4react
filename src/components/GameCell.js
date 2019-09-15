import React from 'react'

function GameCell(props) {
    let colour = "";
    switch (props.value) {
        case 0: 
            colour = "white"
            break
        case 1:
            colour = "red"
            break
        case 2:
            colour = "yellow"
            break
        default:
            colour = "white"
    }
    
    return (
        <td onClick={() => props.onCellClick(props.colIndex)}>
            <div className="cell" row={props.rowIndex} col={props.colIndex}>
                <div className={`circle ${colour}`} >
                </div>
            </div>
        </td> 
    )
}

export default GameCell