import React, { useContext } from 'react';
import { GameContext } from './GameContext'
import PlayerPaddle from './PlayerPaddle';
import Ball from './Ball';
import ComputerPaddle from './ComputerPaddle';
import Scores from './Scores';

function Board() {
	const { state, dispatch } = useContext(GameContext);

  return (
		<>
			{
				state.started
					? (
						<>
							<div className="board">
								<Scores />
								<Ball />
								<PlayerPaddle />
								<ComputerPaddle />
							</div>
							<p className="controls"><strong>Controls:</strong> use the <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys to control the paddle.</p>
						</>
					)
					: (
						<div className="intro">
							<h1 className="intro-title">Pong!</h1>
							<button className="intro-cta" onClick={() => dispatch({ type: 'START_GAME' })}>Start Game</button>
							<p><strong>Controls:</strong> use the <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys to control the paddle.</p>
						</div>
					)
			}
		</>
  );
}

export default Board;
