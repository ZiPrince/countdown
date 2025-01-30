import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
//DatePicker: controlled component. meaning the value of the elements, is set and updated thru react state. 
//(react is the single source of truth)
// ensures that data is ALWAYS in sync with the react state - since it's passed down from parent

const DatePickerComponent = () => {
	const [date, setDate] = useState();
	//random events: 
	const  events = [
		"You will find love 💗",
		"You will find fortune 💰",
		"You will find a turtle 🐢",
		"You will find a unicorn 🦄",
		"You will find a dragon 🐉",
		"You will talk to a ghost 🧟‍♂️",
		"You will lose your keys 🔑",
	];

		// set today's date first
		const todaysDate = new Date();
		console.log(todaysDate);
		//~  setDate() modifies the original Date object and returns the timestamp (milliseconds since Jan 1 1970)
		//~ so this will return a huge number : const tomorrow = todaysDate.setDate(todaysDate.getDate()+1);
	
		//~ NEED TO: create a new Date object for tomorrow so i don't overwrite todaysDate. 
		
		const arrayofDays = [];
	
		for (let i=0; i<10; i++) { 
			//!NEED to declare new date obj to not overwrite todaysDate
			const tenFutureDays = new Date(todaysDate);
			//! need a random number instead of adding 1 by 1; 
			tenFutureDays.setDate(todaysDate.getDate() + Math.floor(Math.random()*30 + 1));// this ensures 10 random days/30 gets added
			console.log("what just generated? " + tenFutureDays);
	
			
			//check if array already contains it: 
			if (arrayofDays.includes(tenFutureDays)) { 
				console.log("hey those are the same- abort" + tenFutureDays)
				i--;
			} else {
				arrayofDays.push(tenFutureDays);
				console.log("what just got added?" + tenFutureDays)
			}
		}

  return (<>
	<div>
		<DatePicker 
			selected={date} 
			onChange={(date) => setDate(date)} 
			isClearable
      		placeholderText="I have been cleared!"
			minDate={new Date()}
			excludeDates={arrayofDays}
		/>
	
	</div>
	{date && (
		<div>
			{events[Math.floor(Math.random() * events.length)]}
		</div>
	)}
	{/* <div style={{margin: '40px', fontSize: '8px'}}>
		10 DATES: {arrayofDays.map((day) => <span> {day} </span>)}
	</div> */}
	
	</>)
}

export default DatePickerComponent
