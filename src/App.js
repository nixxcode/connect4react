import React from 'react';

import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {
	constructor() {
		super()
		const gameBoard = this.initBoard()

		// 1 is red player
		// 2 is yellow player
		this.state = {
			currentPlayer: 1, 
			board: gameBoard,
			gameOver: false,
			message: "RED turn"
		}
	}

	newGame = () => {
		const gameBoard = this.initBoard()
		
		this.setState({
			currentPlayer: 1, 
			board: gameBoard,
			gameOver: false,
			message: "RED turn"	
		})
	}
	
	// Create a new 6*7 array initialized with zeroes to represent the game board
	// 0 is neutral/empty
	// 1 is red
	// 2 is yellow
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

	handleCellClick = (col) => {
		// Game has already ended
		if(this.state.gameOver) return 
		
		// Find the bottom-most cell that hasn't been filled
		let row = 5
		while(row > -1) {
			if(this.state.board[row][col] <= 0) {
				break;
			}
			--row;
		}

		// All cells in column have been filled
		if(row <= -1) return 
		
		// Mark clicked cell with current player's number
		const player = this.state.currentPlayer
		let gameBoard = this.state.board
		gameBoard[row][col] = player

		// Check victory conditions first, then draw conditions
		const victory = this.isVictory(player)
		const draw = this.isDraw()

		// Update game state
		this.setState({
			board: gameBoard,
			gameOver: victory ? true : draw,
			currentPlayer: player === 1 ? 2 : 1,

			/* Sets game status message. Checks for victory first, then draw.
			If neither applies, it simply prints out whose turn it is. */
			message: victory ? 
				(player === 1 ? "RED Wins!" : "YELLOW Wins!") : 
				draw ? "DRAW!" :
				(player === 1 ? "YELLOW turn" : "RED turn")	
		})
	}

	isVictory = (player) => {
		const hzWin = this.checkHorizontal(player)
		const vWin = this.checkVertical(player)
		const drWin = this.checkDiagonalRight(player)
		const dlWin = this.checkDiagonalLeft(player)

		if(hzWin || vWin || drWin || dlWin) return true
		else return false
	}

	isDraw = () => {
		for(let row = 0; row < 6; row++) {
			for(let col = 0; col < 7; col++) {
				if(this.state.board[row][col] <= 0)
					return false // There are neutral cells remaining
			}
		}
		return true
	}

	checkHorizontal = (player) => {
		for(let row = 0; row < 6; row++) {
			for(let col = 0; col < 4; col++) {
				if(
					this.state.board[row][col] === player &&
					this.state.board[row][col+1] === player &&	
					this.state.board[row][col+2] === player &&
					this.state.board[row][col+3] === player
				) 
				return true
			}
		}
		return false	
	}

	checkVertical = (player) => {
		for(let col = 0; col < 7; col++) {
			for(let row = 0; row < 3; row++) {
				if(
					this.state.board[row][col] === player &&
					this.state.board[row+1][col] === player &&	
					this.state.board[row+2][col] === player &&
					this.state.board[row+3][col] === player
				) 
				return true
			}
		}
		return false	
	}

	checkDiagonalRight = (player) => {
		for(let row = 0; row < 3; row++) {
			for(let col = 0; col < 4; col++) {
				if(
					this.state.board[row][col] === player &&
					this.state.board[row+1][col+1] === player &&	
					this.state.board[row+2][col+2] === player &&
					this.state.board[row+3][col+3] === player
				) 
				return true
			}
		}
		return false	
	}

	checkDiagonalLeft = (player) => {
		for(let row = 0; row < 3; row++) {
			for(let col = 6; col > 2; col--) {
				if(
					this.state.board[row][col] === player &&
					this.state.board[row+1][col-1] === player &&	
					this.state.board[row+2][col-2] === player &&
					this.state.board[row+3][col-3] === player
				) 
				return true
			}
		}
		return false	
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