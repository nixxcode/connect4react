import React from 'react'
import GameCell from './GameCell'

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