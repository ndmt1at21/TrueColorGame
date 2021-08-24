import reducerType from '../constants/reducerType';

import {
	AddScoreAction,
	ChangeGameStatusAction,
	NextQuizAction,
	GameState,
	PersistAction,
	GameAction,
	ChangeQuizStatusAction,
	AnswerAction
} from '../@types/game';
import { INIT_STATE } from '../constants/app';

const gameReducer = (state: GameState, action: GameAction): GameState => {
	switch (action.type) {
		case reducerType.CHANGE_GAME_STATUS:
			return {
				...state,
				status: (action as ChangeGameStatusAction).data
			};
		case reducerType.CHANGE_QUIZ_STATUS:
			return {
				...state,
				quizStatus: (action as ChangeQuizStatusAction).data
			};
		case reducerType.ADD_SCORE:
			const score = state.score + (action as AddScoreAction).data;
			return {
				...state,
				score,
				bestScore: score > state.bestScore ? score : state.bestScore
			};
		case reducerType.NEXT_QUIZ:
			return { ...state, curQuiz: (action as NextQuizAction).data };
		case reducerType.ANSWER:
			return {
				...state,
				answer: (action as AnswerAction).data,
				quizStatus: 'answered'
			};
		case reducerType.RESET:
			return { ...INIT_STATE, bestScore: state.bestScore };
		case reducerType.PERSIST:
			console.log((action as PersistAction).data);
			return (action as PersistAction).data;
		default:
			return state;
	}
};

export default gameReducer;
