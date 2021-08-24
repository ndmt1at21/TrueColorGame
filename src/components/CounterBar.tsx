import tw from '../utils/tw';
import './styles.css';

type CounterBarProps = {
	totalMili: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const CounterBar = ({
	totalMili,
	className,
	...rest
}: CounterBarProps) => {
	const classes = tw(
		'h-2',
		'rounded-lg',
		'bg-blue-600',
		'origin-left',
		className
	);

	return (
		<div
			className={classes}
			style={{ animation: `width-reduce ${totalMili}ms linear` }}
			{...rest}
		></div>
	);
};
