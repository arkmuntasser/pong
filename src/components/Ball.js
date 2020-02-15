import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import useInterval from '../hooks/useInterval';

function Ball() {
	const { state, dispatch } = useContext(GameContext);
	const { coords, leftPaddlePostion, rightPaddlePostion } = state;

	useInterval(() => {
		if (
			coords.x === 58 &&
			coords.y >= rightPaddlePostion && coords.y <= rightPaddlePostion + 12
		) {
			dispatch({ type: 'CHANGE_X_DIRECTION' });
		}

		if (
			coords.x === 4 &&
			coords.y >= leftPaddlePostion && coords.y <= leftPaddlePostion + 12
		) {
			dispatch({ type: 'CHANGE_X_DIRECTION' });
		}

		if (coords.y === 1 || coords.y === 61) {
			dispatch({ type: 'CHANGE_Y_DIRECTION' });
		}

		if (coords.x === 61) {
			dispatch({ type: 'INCREMENT_CPU_SCORE' });
		}

		if (coords.x === 1) {
			dispatch({ type: 'INCREMENT_PLAYER_SCORE' });
		}

		dispatch({ type: 'MOVE' });
	}, 50);

	return (
		<div
			className="ball"
			style={{
				gridColumn: `${coords.x} / span 1`,
				gridRow: `${coords.y} / span 1`
			}}
		></div>
	)
}

export default Ball;
