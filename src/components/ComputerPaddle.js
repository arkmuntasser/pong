import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import useInterval from '../hooks/useInterval';

function ComputerPaddle() {
	const { state, dispatch } = useContext(GameContext);
	const { coords: { y }, leftPaddlePostion } = state;

	function getRandomNumber() {
		return Math.floor(Math.random() * Math.floor(10));
	}

	useInterval(() => {
		const bonusMovement = getRandomNumber();
		const hasBonusMovement = [0,1,2].includes(bonusMovement);
		const randomNumber = getRandomNumber();

		if (state.xDirection === -1) {
			if (y <= leftPaddlePostion + 2) {
				dispatch({ type: 'LEFT_PADDLE_UP' });

				if (hasBonusMovement) {
					if (randomNumber > 5) {
						dispatch({ type: 'LEFT_PADDLE_UP' });
					}

					if (bonusMovement === 0) {
						dispatch({ type: 'LEFT_PADDLE_UP' });
					}
				}
			} else if (y > leftPaddlePostion + 10) {
				dispatch({ type: 'LEFT_PADDLE_DOWN' });

				if (hasBonusMovement) {
					if (randomNumber <= 5) {
						dispatch({ type: 'LEFT_PADDLE_DOWN' });
					}

					if (bonusMovement === 0) {
						dispatch({ type: 'LEFT_PADDLE_UP' });
					}
				}
			}
		}
	}, 65)

	return (
		<div
			className="paddle paddle__computer"
			style={{ gridRow: `${state.leftPaddlePostion} / span 12` }}></div>
	)
}

export default ComputerPaddle;
