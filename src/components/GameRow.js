import React from 'react'
import GameCell from './GameCell'

// Get all cells present in this row and render them in a <tr> element
function GameRow(props) {
    const cells = props.row.map((cell, index) => {
        return (
            <GameCell key={index} rowIndex={props.rowIndex} colIndex={index} value={cell} onCellClick={props.onCellClick} />
        )
    })

    return (
        <tr>{cells}</tr>
    )
}

export default GameRow