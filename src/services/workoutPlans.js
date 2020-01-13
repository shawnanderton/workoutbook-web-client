export async function getWorkoutPlanById(id) {
	try {
		let response = await fetch(
			'../data/workoutPlan.json'
		);
		let responseJson = await response.json();
		return responseJson.find(plan => plan.Id === id);
	} catch (error) {
		console.error(error);
	}
}
