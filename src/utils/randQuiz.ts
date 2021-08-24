import { Quiz } from '../@types/game';
import { colorClasses, colors } from '../constants/app';

export const randQuiz = (): Quiz => {
	const l = colors.length;
	if (l < 2) throw new Error('Not enough color for random');

	const nName = Math.floor(Math.random() * l);

	const salt = Math.random() * 10;

	// right
	if (salt > 5) {
		return {
			colorName: colors[nName],
			fillColor: colors[nName],
			fillColorClass: colorClasses[nName]
		};
	}

	// wrong
	const nFill = Math.floor(Math.random() * (l - 2));
	const colorsWrong = colors.filter(val => val !== colors[nName]);
	const colorClassesWrong = colorClasses.filter(
		val => val !== colorClasses[nName]
	);

	return {
		colorName: colors[nName],
		fillColor: colorsWrong[nFill],
		fillColorClass: colorClassesWrong[nFill]
	};
};
