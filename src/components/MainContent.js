import React from 'react'
import GameBoard from './GameBoard'

// Render all content in the <main> tag, including the game board
function MainContent(props) {
    return (
        <main className="justify-center">
            <div className="width-limit">
                <div class="info-area">
                    <button type="button" onClick={() => props.onNewGame()}>New Game</button>
                    <h1>{props.gameState.message}</h1>
                </div>
                <GameBoard gameState={props.gameState} onCellClick={props.onCellClick} />
            </div>
        </main>
    )
}

export default MainContent