import React, { useContext, useEffect, useRef } from 'react';
import { GameContext } from './GameContext';
import useKeyPress from '../hooks/useKeyPress';

function PlayerPaddle() {
	const { state, dispatch } = useContext(GameContext);
	const up = useKeyPress('ArrowUp');
	const down = useKeyPress('ArrowDown');
	const intervalId = useRef();
	const speed = 30;

	useEffect(() => {
		const type = up ? 'RIGHT_PADDLE_UP' : down ? 'RIGHT_PADDLE_DOWN' : undefined;

		if (type) {
			intervalId.current = setInterval(() => {
				dispatch({ type });
			}, speed);
		} else {
			clearInterval(intervalId.current);
		}

		return () => clearInterval(intervalId.current);
	}, [up, down, dispatch])

	return (
		<div className="paddle paddle__player" style={{ gridRow: `${state.rightPaddlePostion} / span 12` }}></div>
	)
}

export default PlayerPaddle;
