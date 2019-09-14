import React from 'react'
import GameRow from './GameRow'

function GameBoard(props) {
    console.log(props)
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