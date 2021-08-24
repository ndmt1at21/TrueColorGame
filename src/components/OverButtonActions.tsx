import React from 'react';
import { Button } from './Button';

type OverButtonActionsProps = {
	onHome: () => void;
	onReturn: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const OverButtonActions = ({
	onHome,
	onReturn,
	className,
	...rest
}: OverButtonActionsProps) => {
	return (
		<div aria-label="action" className={className} {...rest}>
			<Button
				color="blue"
				padding="sm"
				className="flex-grow"
				onClick={() => onHome()}
			>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 37 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M22.9989 34.4986V25.4984C22.9989 25.1006 22.8409 24.7191 22.5596 24.4378C22.2783 24.1565 21.8967 23.9984 21.4989 23.9984H15.4989C15.1011 23.9984 14.7195 24.1565 14.4382 24.4378C14.1569 24.7191 13.9989 25.1006 13.9989 25.4984V34.4986C13.9989 34.8964 13.8409 35.2779 13.5596 35.5592C13.2784 35.8405 12.8969 35.9986 12.4991 35.9986L3.50019 35.9998C3.30319 35.9998 3.10811 35.9611 2.9261 35.8857C2.74409 35.8103 2.57871 35.6998 2.43941 35.5605C2.3001 35.4212 2.18959 35.2559 2.1142 35.0739C2.0388 34.8919 2 34.6968 2 34.4998V17.1635C2 16.9545 2.04367 16.7478 2.1282 16.5567C2.21274 16.3656 2.33628 16.1942 2.4909 16.0537L17.4899 2.41589C17.766 2.16484 18.1257 2.02572 18.4989 2.02571C18.8721 2.0257 19.2319 2.16479 19.508 2.41582L34.509 16.0537C34.6637 16.1942 34.7872 16.3656 34.8718 16.5567C34.9563 16.7479 35 16.9545 35 17.1635V34.4998C35 34.6968 34.9612 34.8919 34.8858 35.0739C34.8104 35.2559 34.6999 35.4213 34.5606 35.5605C34.4213 35.6998 34.2559 35.8103 34.0739 35.8857C33.8919 35.9611 33.6968 35.9998 33.4998 35.9998L24.4987 35.9986C24.1009 35.9986 23.7194 35.8405 23.4382 35.5592C23.1569 35.2779 22.9989 34.8964 22.9989 34.4986V34.4986Z"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Button>
			<Button
				color="green"
				padding="sm"
				className="flex-grow"
				onClick={() => onReturn()}
			>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 37 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M27.5312 13.1967H36.5312V4.19675"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M30.1673 30.1673C27.8597 32.4748 24.9197 34.0463 21.719 34.683C18.5183 35.3196 15.2007 34.9929 12.1857 33.744C9.17074 32.4952 6.59379 30.3803 4.78075 27.6669C2.96771 24.9535 2 21.7634 2 18.5C2 15.2366 2.96771 12.0465 4.78075 9.3331C6.59379 6.61969 9.17074 4.50484 12.1857 3.256C15.2007 2.00715 18.5183 1.68039 21.719 2.31705C24.9197 2.95371 27.8597 4.52518 30.1673 6.83274L36.5312 13.1967"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Button>
		</div>
	);
};
