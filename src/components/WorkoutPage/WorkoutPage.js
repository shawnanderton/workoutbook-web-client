import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getActiveUserPlan } from '../../services/userWorkout';
import { getWorkoutPlanById } from '../../services/workoutPlans';

function WorkoutPage() {
	const [plan, setPlan] = useState({});
	const [userActivePlan, setUserActivePlan] = useState({});
	const [exercises, SetExercises] = useState([]);

	useEffect(() => {
		getActiveUserPlan().then(activePlan => {
			setUserActivePlan(activePlan);
			getWorkoutPlanById(activePlan.planId).then(p => {
				setPlan(p);

				let w = p.workouts.find(x => x.number === 1);
				console.log(p.workouts);
				SetExercises(w.exercises);
			});
		});
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-10">
					<h1>Active Workout Plan: {plan.name}</h1>
				</div>
				<div className="col">
					<h2>Day {userActivePlan.lastCompletedWorkoutNumber + 1}</h2>
				</div>
				<div className="col-12">
					<p>{plan.description}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h3>Next Workout</h3>
				</div>
				<div className="col-12">
					<ul className="list-group">
						{exercises.map(e => (
							<li className="list-group-item" key={e.exerciseId}>
								<div className="row">
									
									<div className="col-6">{e.name}</div>
									{e.planSets.map(s => (
										<div key={s.number} className="col">
											set: {s.number} reps: {s.reps}
										</div>

									))}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default WorkoutPage;
