import tw from '../utils/tw';

type LayoutProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Layout = ({ children, className, ...rest }: LayoutProps): JSX.Element => {
	const classes = tw(
		'w-full sm:w-96 h-full',
		'bg-yellow-400',
		'p-10 sm:mx-5 sm:rounded-xl sm:shadow-2xl',
		'flex flex-col',
		'overflow-hidden',
		className
	);
	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
};

export default Layout;
