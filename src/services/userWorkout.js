export async function getActiveUserPlan() {
	try {
		let response = await fetch('./data/Workout.json');
		let responseJson = await response.json();
		return responseJson.find(plan => plan.active === true);
	} catch (error) {
		console.error(error);
	}
}
