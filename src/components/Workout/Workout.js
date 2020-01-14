import React, {useState} from 'react';

import SetDisplay from '../Set/Display/SetDisplay';
import './workout.css';
function Workout() {
    let sets = [
		{
			number: 1,
			reps: 12,
			restAfter: 10
		},
		{
			number: 2,
			reps: 10,
			restAfter: 10
		},
		{
			number: 3,
			reps: 8,
			restAfter: 10
		}
    ];
    let setIndex = 0;

    const [rests, setRests] = useState([10]);

    function saveSet(event) {
        event.preventDefault();
         setRests(rests => [0, 10])
	}

    return (
		<ul className="list-group">
			{rests}
			<li className="list-group-item">
				<SetDisplay
					set="1"
					reps="12"
					rest={rests[0]}
					onSave={saveSet}
				/>
			</li>
			<li className="list-group-item">
				<SetDisplay set="2" reps="12" rest={rests[1]} />
			</li>
			<li className="list-group-item">
				<SetDisplay set="3" reps="12" rest={rests[2]} />
			</li>
		</ul>
	);
}

export default Workout;
