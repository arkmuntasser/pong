import React from 'react';
import { GameProvider } from './GameContext'
import Board from './Board';

function App() {
  return (
		<GameProvider>
			<Board />
		</GameProvider>
  );
}

export default App;
