import { useGame } from '../hooks/useGame';
import Layout from '../layout/Layout';
import tw from '../utils/tw';
import { WelcomeTitle } from '../components/WelcomeTitle';
import { AnswerButtonActions } from '../components/AnswerButtonActions';
import { Score } from '../components/Score';
import actions from '../actions';
import { QuizText } from '../components/QuizText';
import { CounterBar } from '../components/CounterBar';
import { useRef } from 'react';
import { QUIZ_TIME } from '../constants/app';
import { useEffect } from 'react';
import { OverButtonActions } from '../components/OverButtonActions';
import { useHistory } from 'react-router';

const actionClasses = {
	root: tw('flex h-16 w-full space-x-2')
};

const titles = ['Ready?', 'Go!'];

export const Game = () => {
	const [state, dispatch] = useGame();
	const { status, quizStatus, score, bestScore, curQuiz, answer } = state;
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const history = useHistory();

	useEffect(() => {
		if (status !== 'running') return;

		if (quizStatus === 'pending') {
			dispatch(actions.nextQuiz());
			dispatch(actions.changeQuizStatus('progress'));
		}

		if (quizStatus === 'progress') {
			timerRef.current = setTimeout(() => {
				dispatch(actions.answer(null));
			}, QUIZ_TIME);
			return () => clearTimeout(timerRef.current!);
		}

		if (quizStatus === 'answered') {
			const trueAns = curQuiz?.colorName === curQuiz?.fillColor;

			if (answer === trueAns) {
				dispatch(actions.addScore(1));
				dispatch(actions.changeQuizStatus('pending'));
			} else {
				dispatch(actions.changeGameStatus('over'));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, quizStatus, dispatch]);

	const renderWelcome = () => {
		return (
			<WelcomeTitle
				titles={titles}
				onStart={() => {
					dispatch(actions.changeGameStatus('running'));
					dispatch(actions.changeQuizStatus('pending'));
				}}
			/>
		);
	};

	const renderOver = () => {
		return (
			<>
				<Score score={score} bestScore={bestScore} />
				<QuizText text="game over!" />
				<OverButtonActions
					className={actionClasses.root}
					onHome={() => {
						history.push('/');
					}}
					onReturn={() => {
						dispatch(actions.reset());
					}}
				/>
			</>
		);
	};

	const renderRunning = () => {
		return (
			<>
				<CounterBar
					className="absolute top-0 left-0 w-full"
					totalMili={QUIZ_TIME}
				/>
				<Score score={score} bestScore={bestScore} />
				<QuizText
					className={curQuiz!.fillColorClass}
					text={curQuiz!.colorName}
				/>
				<AnswerButtonActions
					className={actionClasses.root}
					onAnswer={answer => dispatch(actions.answer(answer))}
				/>
			</>
		);
	};

	return status === 'idle' ? (
		<Layout className="justify-center">{renderWelcome()}</Layout>
	) : (
		<Layout className="justify-between relative">
			{status === 'running' &&
				quizStatus === 'progress' &&
				renderRunning()}
			{status === 'over' && renderOver()}
		</Layout>
	);
};
