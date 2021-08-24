type Reducer<S, A> = (prevState: S, action: A) => S;
type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any>
	? S
	: never;
type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
	any,
	infer A
>
	? A
	: never;

const combineReducers =
	<R extends Reducer<any, any>>(slices: { [key: string]: R }) =>
	(prevState: ReducerState<R>, action: ReducerAction<R>) => {
		return Object.keys(slices).reduce((acc, slice) => {
			return { ...acc, ...slices[slice](prevState, action) };
		}, prevState);
	};

export { combineReducers };
