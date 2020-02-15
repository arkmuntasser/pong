import React, { useContext } from 'react';
import { GameContext } from './GameContext';

function Scores() {
	const { state } = useContext(GameContext);

	return (
		<div className="scores">
			<span className="score score__cpu">{state.cpuScore}</span>
			<span className="divider">|</span>
			<span className="score score__player">{state.playerScore}</span>
		</div>
	)
}

export default Scores;
