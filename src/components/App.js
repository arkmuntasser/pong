import React from 'react';
import { GameProvider } from './GameContext'
import PlayerPaddle from './PlayerPaddle';

function App() {
  return (
		<GameProvider>
			<div className="board">
				<PlayerPaddle />
			</div>
		</GameProvider>
  );
}

export default App;
