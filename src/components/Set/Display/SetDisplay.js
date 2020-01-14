import React, { useState, useEffect } from 'react';
import './set.css';

function SetDisplay(props) {
	const [seconds, setSeconds] = useState(props.rest);
	const [remainingRestPercent, setRemainingRestPercent] = useState(100);

	let { disabled, rest, set } = props;
	let s = rest;

	useEffect(() => {
		if (rest > 0) {
			const interval = setInterval(() => {
                rest = rest - 1;
				setRemainingRestPercent(() => (rest / s) * 100);
				console.log(rest);
				if (rest <= 0) clearInterval(interval);
			}, 1000);
		}
	}, [props.rest]);

	return (
		<form value={set} onSubmit={props.onSave}>
			<div className="row">
				{rest > 0 && (
					<div
						style={{ width: `${remainingRestPercent}%` }}
						className="progress-bar"
						role="progressbar"
						aria-valuenow="20"
						aria-valuemin="0"
						aria-valuemax="160"
					>
						Rest {rest} seconds
					</div>
				)}
				<div className="col-1">{set}</div>
				<div className="col-5">
					<input
						type="number"
						disabled={disabled}
						className="form-control"
						placeholder="Weight"
					/>
				</div>
				<div className="col-5">
					<input
						type="number"
						disabled={disabled}
						className="form-control"
						placeholder="Reps"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Save" />
			</div>
		</form>
	);
}

export default SetDisplay;
