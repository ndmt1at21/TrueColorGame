import React from 'react';
import { useContext } from 'react';

import { GameAction, GameState } from '../@types/game';
import { GameContext } from '../context/GameContext';

export const useGame = (): [GameState, React.Dispatch<GameAction>] => {
	const context = useContext(GameContext);

	if (!context) {
		throw new Error(
			'useGame must be used within a <GameContextProvider />'
		);
	}

	const { state, dispatch } = context;
	return [state, dispatch];
};
