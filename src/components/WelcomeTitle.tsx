import { useEffect, useState } from 'react';
import tw from '../utils/tw';

type WelcomeTitleProps = {
	titles: string[];
	onStart: () => void;
} & React.HtmlHTMLAttributes<HTMLHeadElement>;

export const WelcomeTitle = ({
	titles,
	onStart,
	className,
	...rest
}: WelcomeTitleProps) => {
	const [titleIdx, setTitleIdx] = useState(0);

	useEffect(() => {
		if (titleIdx < titles.length) {
			const timerId = setInterval(
				() => setTitleIdx(prev => prev + 1),
				1000
			);

			return () => clearInterval(timerId);
		} else {
			onStart();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [titleIdx, titles.length]);

	const classes = tw(
		'text-5xl sm:text-6xl',
		'font-bold capitalize',
		'text-center',
		className
	);
	return (
		<h1 className={classes} {...rest}>
			{titles[titleIdx]}
		</h1>
	);
};
