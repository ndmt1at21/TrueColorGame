import { Game } from './pages/Game';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tw from './utils/tw';
import { useEffect } from 'react';
import { GameContextProvider } from './context/GameContext';

const App = (): JSX.Element => {
	const classes = tw(
		'w-screen h-screen',
		'bg-gray-200',
		'flex justify-center'
	);

	useEffect(() => {
		document.title = 'True Color Game';
	});

	return (
		<GameContextProvider>
			<Router>
				<div className={classes}>
					<Switch>
						<Route exact={true} path="/">
							<Home />
						</Route>
						<Route exact={true} path="/play">
							<Game />
						</Route>
					</Switch>
				</div>
			</Router>
		</GameContextProvider>
	);
};

export default App;
