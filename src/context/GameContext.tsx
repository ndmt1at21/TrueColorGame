import React, { createContext, Dispatch, useEffect, useReducer } from 'react';
import { GameAction, GamePersist, GameState } from '../@types/game';
import actions from '../actions';
import { INIT_STATE, STORAGE_KEY } from '../constants/app';
import gameReducer from '../reducers';

type ContextProps = {
	state: GameState;
	dispatch: Dispatch<GameAction>;
};

export const GameContext = createContext<ContextProps>({} as ContextProps);

export const GameContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(gameReducer, INIT_STATE);

	useEffect(() => {
		const data = window.localStorage.getItem(STORAGE_KEY);
		if (!data) return;

		const json = JSON.parse(data) as GamePersist;
		dispatch(actions.persist(json));
	}, [dispatch]);

	useEffect(() => {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		return () => {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		};
	}, [state]);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};
