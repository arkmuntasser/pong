import React from 'react';
import { GameProvider } from './GameContext'
import PlayerPaddle from './PlayerPaddle';
import Ball from './Ball';
import ComputerPaddle from './ComputerPaddle';
import Scores from './Scores';

function App() {
  return (
		<GameProvider>
			<div className="board">
				<Scores />
				<Ball />
				<PlayerPaddle />
				<ComputerPaddle />
			</div>
		</GameProvider>
  );
}

export default App;
