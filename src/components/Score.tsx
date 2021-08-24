import tw from '../utils/tw';

type ScoreProps = {
	score: number;
	bestScore: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Score = ({ score, bestScore, className, ...rest }: ScoreProps) => {
	return (
		<div
			aria-label="score"
			className={tw(className, 'text-2xl capitalize')}
			{...rest}
		>
			<div aria-label="current-score" className="space-x-2">
				<span>score:</span>
				<span>{score}</span>
			</div>
			<div aria-label="best-score" className="space-x-2">
				<span>best:</span>
				<span>{bestScore}</span>
			</div>
		</div>
	);
};
