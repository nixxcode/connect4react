import React from 'react'
import GameCell from './GameCell'

function GameBoard() {
    return (
        <div className="game-board">
            <table>
                <thead></thead>
                
                <tbody>
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>   
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>
                    <tr>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                        <td><GameCell /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameBoard