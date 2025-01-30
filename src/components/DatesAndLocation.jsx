
const DatesAndLocation = () => {

	const date = new Date();
	
	
  return (
	<>
    <div style={{margin: '40px', fontSize: '20px', fontWeight: 'bold'}}>
		TODAY IS <br/>
		{date.toDateString()}
    </div>
	</>
  )
}

export default DatesAndLocation


// const thirty = new Date(todaysDate.getDate()+30);
// 	console.log("30 days from now: " + thirty); //returns the number 60 (30 + 30)

// 	const newDate = todaysDate.setDate(1);
// 	console.log(thirty, newDate);

