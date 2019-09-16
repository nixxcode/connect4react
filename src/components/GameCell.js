import React from 'react'

// Render the individual game cell. 
// Colour class on the circle is set based on the cell's value in game state
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
    
    /* onCellClick handler is passed down all the way from App. This way, we can maintain 
    the entire game state in one place. All other components simply render what they get via props */
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