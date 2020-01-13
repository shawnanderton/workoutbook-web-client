import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import WorkOutPage from './components/WorkoutPage/WorkoutPage';
import UserContext from './components/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<>
			<div id="banner"></div>
			<UserContext.Provider>
				<Suspense fallback={<p>Loading component...</p>}>
					<main>
						<Switch>
							<Route
								path="/workout-page"
								exact
								component={WorkOutPage}
							/>
						</Switch>
					</main>
					<Nav />
				</Suspense>
			</UserContext.Provider>
		</>
	);
}

export default App;
