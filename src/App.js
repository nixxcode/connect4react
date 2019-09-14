import React from 'react';

import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {
	constructor() {
		super()
		const gameBoard = this.initBoard()

		this.state = {
			currentPlayer: 1, 
			board: gameBoard,
			gameOver: false,
			message: ""
		}
	}

	newGame = () => {
		//console.log("Clicked from app!");
		const gameBoard = this.initBoard()
		
		this.setState({
			currentPlayer: 1, 
			board: gameBoard,
			gameOver: false,
			message: ""	
		})
	}
	
	initBoard = () => {
		let board = []
		for(let r = 0; r < 6; r++) {
			let row = []
			for(let c = 0; c < 7; c++) {
				row.push(0)
			}
			board.push(row)
		}
		return board
	}

	handleCellClick = (row, col) => {
		console.log(`User clicked ${row},${col}`)
		// Update bottom-most cell of column: Paint red if player 1, paint yellow if player 2
	}

	render() {
		return (
			<div className="App">
				<Header />
				<MainContent gameState={this.state} onNewGame={this.newGame} onCellClick={this.handleCellClick} />
				<Footer />
			</div>
		);
	}
}

export default App