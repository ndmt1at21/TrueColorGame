import tw from '../utils/tw';

type QuizTextProps = {
	text: string;
} & React.HtmlHTMLAttributes<HTMLHeadElement>;

export const QuizText = ({ text, className, ...rest }: QuizTextProps) => {
	const classes = tw(
		'text-5xl sm:text-6xl',
		'font-bold capitalize',
		'text-center',
		className
	);

	return (
		<h1 className={classes} {...rest}>
			{text}
		</h1>
	);
};
