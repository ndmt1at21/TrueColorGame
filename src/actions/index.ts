import reducerType from '../constants/reducerType';
import { randQuiz } from '../utils/randQuiz';

import {
	ChangeGameStatusAction,
	GameStatus,
	NextQuizAction,
	ResetAction,
	AddScoreAction,
	Quiz,
	PersistAction,
	GamePersist,
	AnswerAction,
	QuizStatus,
	ChangeQuizStatusAction
} from '../@types/game';

const changeGameStatus = (data: GameStatus): ChangeGameStatusAction => ({
	type: reducerType.CHANGE_GAME_STATUS,
	data
});

const changeQuizStatus = (data: QuizStatus): ChangeQuizStatusAction => ({
	type: reducerType.CHANGE_QUIZ_STATUS,
	data
});

const nextQuiz = (data: Quiz = randQuiz()): NextQuizAction => ({
	type: reducerType.NEXT_QUIZ,
	data
});

const addScore = (data: number): AddScoreAction => ({
	type: reducerType.ADD_SCORE,
	data
});

const answer = (data: boolean | null): AnswerAction => ({
	type: reducerType.ANSWER,
	data
});

const reset = (): ResetAction => ({
	type: reducerType.RESET
});

const persist = (data: GamePersist): PersistAction => ({
	type: reducerType.PERSIST,
	data
});

const actions = {
	changeGameStatus,
	changeQuizStatus,
	nextQuiz,
	addScore,
	persist,
	reset,
	answer
};

export default actions;
