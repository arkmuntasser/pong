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
	direction: 1,
	leftPaddlePostion: 1,
	rightPaddlePostion: 1,
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
