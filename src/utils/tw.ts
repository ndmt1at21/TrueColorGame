const tw = (...args: (string | undefined | boolean)[]): string => {
	return (args.filter(Boolean) as string[])
		.map(clz => clz.replace(/\s\s+/g, ' '))
		.join(' ')
		.trim();
};

export default tw;
