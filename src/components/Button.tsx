import tw from '../utils/tw';

type ButtonProps = {
	color: 'red' | 'green' | 'blue';
	padding: 'sm' | 'lg';
} & React.HTMLAttributes<HTMLButtonElement>;

const bgColors = {
	red: 'bg-red-500',
	green: 'bg-green-500',
	blue: 'bg-blue-500'
};

const hoverColors = {
	red: 'hover:bg-red-600',
	green: 'hover:bg-green-600',
	blue: 'hover:bg-blue-600'
};

const activeColors = {
	red: 'active:bg-red-700',
	green: 'active:bg-green-700',
	blue: 'active:bg-blue-700'
};

export const Button = ({
	padding,
	color,
	children,
	className,
	...rest
}: ButtonProps) => {
	const classes = tw(
		padding === 'sm' ? 'p-5' : 'p-10',
		bgColors[color],
		hoverColors[color],
		activeColors[color],
		'text-white',
		'rounded-lg',
		'shadow-lg active:shadow-none',
		'flex justify-center',
		'transition-all',
		'w-full',
		className
	);

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
};
