import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import WorkoutPlanPage from './components/WorkoutPlanPage/WorkoutPlanPage';
import Workout from './components/Workout/Workout';
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
								component={WorkoutPlanPage}
							/>
							<Route
								path="/workout"
								exact
								component={Workout}
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
