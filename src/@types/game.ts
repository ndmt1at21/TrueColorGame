export type GameStatus = 'idle' | 'running' | 'over';
export type QuizStatus = 'progress' | 'answered' | 'pending';

export type Quiz = {
	colorName: string;
	fillColor: string;
	fillColorClass: string;
};

export type GameState = {
	status: GameStatus;
	quizStatus: QuizStatus;
	curQuiz: Quiz | null;
	answer: boolean | null;
	score: number;
	bestScore: number;
};

export type GamePersist = GameState;

export type Action<T> = {
	type: string;
	data: T;
};

export type ActionWithoutData = {
	type: string;
};

export type ChangeGameStatusAction = Action<GameStatus>;
export type ChangeQuizStatusAction = Action<QuizStatus>;
export type ResetAction = ActionWithoutData;
export type AddScoreAction = Action<number>;
export type NextQuizAction = Action<Quiz>;
export type PersistAction = Action<GamePersist>;
export type AnswerAction = Action<boolean | null>;
export type GameAction =
	| ChangeGameStatusAction
	| ResetAction
	| AddScoreAction
	| NextQuizAction
	| PersistAction;
