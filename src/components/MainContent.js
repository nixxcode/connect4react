import React from 'react'
import GameBoard from './GameBoard'

function MainContent() {
    return (
        <main className="justify-center">
            <div className="width-limit">
                <h1>Game Board goes hya!</h1>
                <GameBoard />
            </div>
        </main>
    )
}

export default MainContent