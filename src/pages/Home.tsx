import { Link } from 'react-router-dom';

import actions from '../actions';
import { Button } from '../components/Button';
import { useGame } from '../hooks/useGame';
import Layout from '../layout/Layout';

import tw from '../utils/tw';

const titleClasses = tw(
	'text-5xl sm:text-6xl',
	'font-bold capitalize',
	'text-center',
	'pt-14'
);

const playClasses = {
	root: tw('flex flex-col', 'pt-10 sm:pt-24'),
	button: tw('text-3xl font-bold'),
	best: tw(
		'capitalize',
		'pt-2 space-x-1',
		'text-2xl text-blue-500 text-center'
	)
};

const hintClasses = {
	root: tw(
		'border-2 border-gray-900 rounded-2xl',
		'p-5 mt-10',
		'flex items-center flex-col'
	),
	title: tw('uppercase text-lg mb-3'),
	row: tw(
		'space-x-2 mt-1',
		'flex flex-row items-center',
		'uppercase text-lg'
	),
	icon: tw('w-8 h-8 p-2 rounded-lg')
};

const Home = (): JSX.Element => {
	const [{ bestScore }, dispatch] = useGame();

	return (
		<Layout className="justify-between">
			<h1 aria-label="game-title" className={titleClasses}>
				true color
			</h1>
			<div aria-label="play" className={playClasses.root}>
				<Link to="/play">
					<Button
						color="red"
						padding={'sm'}
						className={playClasses.button}
						onClick={() => {
							console.log('reste');
							dispatch(actions.reset());
						}}
					>
						Play
					</Button>
				</Link>

				<div className={playClasses.best}>
					<span>best:</span>
					<span>{bestScore}</span>
				</div>
			</div>
			<div aria-label="hint" className={hintClasses.root}>
				<h2 className={hintClasses.title}>hint</h2>
				<div aria-label="hint-label">Tên màu có trùng với tên chữ?</div>
				<div className={hintClasses.row}>
					<span className="text-red-500">red</span>
					<span>=</span>
					<span className={`${hintClasses.icon} bg-green-500`}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 18 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.4375 2L6.8125 11.6246L2 6.8125"
								stroke="white"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</div>
				<div className={hintClasses.row}>
					<span className="text-blue-500">red</span>
					<span>=</span>
					<span className={`${hintClasses.icon} bg-red-500`}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M26 2L2 26"
								stroke="white"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M26 26L2 2"
								stroke="white"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
