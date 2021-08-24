import { GameState } from '../@types/game';

export const colors = ['gray', 'red', 'green', 'blue', 'purple', 'orange'];
export const colorClasses = [
	'text-gray-600',
	'text-red-600',
	'text-green-600',
	'text-blue-600',
	'text-purple-600',
	'text-orange-600'
];
export const QUIZ_TIME = 3000;
export const STORAGE_KEY = 'TRUE_COLOR_GAME';
export const INIT_STATE: GameState = {
	status: 'idle',
	quizStatus: 'pending',
	answer: null,
	curQuiz: null,
	score: 0,
	bestScore: 0
};
