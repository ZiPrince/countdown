import { useState } from 'react'
import Timer from './components/Timer';
import DatePickerComponent from './components/DatePicker';
import './App.css'
import DatesAndLocation from './components/DatesAndLocation';


function App() {

  return (
    <>
		<h1>
			Neat Lil Countdown Tool To Help Me Get WORK DONE! 
		</h1>

		<div>
			<DatesAndLocation />
		</div>

		<div>
			<Timer />
		</div>
		
		<div style={{margin: '40px'}}>
			You procrastinator... play with this and go back to work. <br />
			Pick a date to see what would happen...just for fun. 
			<div>
				<DatePickerComponent />
			</div>
		</div>
	
    </>
  )
}

export default App
