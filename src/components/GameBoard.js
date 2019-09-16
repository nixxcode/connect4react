import React from 'react'
import GameRow from './GameRow'

// Grab all rows of the game board and render them in a table
function GameBoard(props) {
    const rows = props.gameState.board.map((row, rowIndex) => {
        return (
            <GameRow key={rowIndex} rowIndex={rowIndex} row={row} onCellClick={props.onCellClick} />
        )
    })
    
    return (
        <div className="game-board">
            <table>
                <thead></thead>  
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

export default GameBoard