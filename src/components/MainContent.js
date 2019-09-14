import React from 'react'
import GameBoard from './GameBoard'

function MainContent(props) {
    return (
        <main className="justify-center">
            <div className="width-limit">
                <button type="button" onClick={() => props.onNewGame()}>New Game</button>
                <GameBoard gameState={props.gameState} onCellClick={props.onCellClick} />
            </div>
        </main>
    )
}

export default MainContent