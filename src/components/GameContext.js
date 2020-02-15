import React, { createContext, useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case "LEFT_PADDLE_UP":
			return {
				...state,
				leftPaddlePostion: Math.max(state.leftPaddlePostion - 1, 1)
			};
		case "LEFT_PADDLE_DOWN":
			return {
				...state,
				leftPaddlePostion: Math.min(state.leftPaddlePostion + 1, 50)
			};
		case "RIGHT_PADDLE_UP":
			return {
				...state,
				rightPaddlePostion: Math.max(state.rightPaddlePostion - 1, 0)
			};
		case "RIGHT_PADDLE_DOWN":
			return {
				...state,
				rightPaddlePostion: Math.min(state.rightPaddlePostion + 1, 50)
			};
		case 'CHANGE_X_DIRECTION':
			return {
				...state,
				xDirection: state.xDirection * -1
			};
		case 'CHANGE_Y_DIRECTION':
			return {
				...state,
				yDirection: state.yDirection * -1
			};
		case 'INCREMENT_PLAYER_SCORE':
			return {
				...state,
				coords: {
					x: 31,
					y: 31,
				},
				xDirection: 1,
				playerScore: state.playerScore + 1
			};
		case 'INCREMENT_CPU_SCORE':
			return {
				...state,
				coords: {
					x: 31,
					y: 31,
				},
				xDirection: -1,
				cpuScore: state.cpuScore + 1
			};
		case 'MOVE':
			return {
				...state,
				coords: {
					x: state.coords.x + state.xDirection,
					y: state.coords.y + state.yDirection,
				}
			};
		default:
			return;
	}
}

const gameLogic = {
	started: false,
	gameover: false,
	coords: {
		x: 31,
		y: 31,
	},
	xDirection: 1,
	yDirection: 1,
	leftPaddlePostion: 25,
	rightPaddlePostion: 25,
	playerScore: 0,
	cpuScore: 0,
}

const GameContext = createContext(gameLogic);

function GameProvider(props) {
	const [state, dispatch] = useReducer(reducer, gameLogic);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{props.children}
		</GameContext.Provider>
	)
}

export { GameContext, GameProvider };
