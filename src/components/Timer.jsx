import { useState, useEffect } from 'react';

const Timer = () => {
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();
	//check if timer is running
	const [isRunning, setIsRunning] = useState(null);
	const [showMsg, setShowMsg] = useState(false);

	const startTimer = () => {
		setIsRunning(true);
		setShowMsg(true);
		console.log('showMsg will be delayed', showMsg);
	};

	const pauseTimer = () => {
		setIsRunning(false);
		setShowMsg(false);
	};

	const resetTimer = () => {
		setIsRunning(false);
		setHours('');
		setMinutes('');
		setSeconds('');
		setShowMsg(false);
	};

	useEffect(() => {
		let interval;
		
		if (isRunning) {
			interval = setInterval(() => {
				// every 1000ms it will loop from the beginning (checking seconds )
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
					setShowMsg(false);
					setIsRunning(false);
					clearInterval(interval);
				}
			}, 1000);
		}
		//clear interval when component unmounts
		return () => {
			clearInterval(interval);
			console.log('interval cleared EVERY SINGLE SECOND the h/m/s changes!');
		}
	}, [isRunning, hours, minutes, seconds]);

  return (<>

			{showMsg?
			(<div>
				You can do this ⏲ 
			</div>) : 
			<div> </div>}
			

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
				<button onClick={pauseTimer}>Pause</button>
				<button onClick={resetTimer}>Reset</button>
			</div>
			
	</>)
}

export default Timer
