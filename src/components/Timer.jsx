import { useState, useEffect } from 'react';

const Timer = () => {
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();
	//check if timer is running
	const [isRunning, setIsRunning] = useState(null);

	const startTimer = () => {
		setIsRunning(true);
	};

	const resetTimer = () => {
		setIsRunning(false);
		setHours('');
		setMinutes('');
		setSeconds('');
	};

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				if (seconds > 0) {
					setSeconds(prev => Number(prev) - 1);
				} else if (minutes > 0) {
					setMinutes(prev => Number(prev) - 1);
					setSeconds(59);
				} else if (hours > 0) {
					setHours(prev => Number(prev) - 1);
					setMinutes(59);
					setSeconds(59);
				} else {
					setIsRunning(false);
					clearInterval(interval);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isRunning, hours, minutes, seconds]);

  return (<>
			<div>
			Enter the time in hours, minutes, and seconds
			</div>
			<div>
				<input type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
				<input type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />
				<input type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />	
			</div>
			<div> 
				<button onClick={startTimer}>Start</button>
				<button onClick={() => setIsRunning(false)}>Stop</button>
				<button onClick={resetTimer}>Reset</button>
			</div>
			<div>
				what is hours, min, sec now :
				{hours} : {minutes} : {seconds}
			</div>
	</>)
}

export default Timer
