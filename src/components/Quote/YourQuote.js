import React, { useState } from "react";
import 'styles/Quote.css'
import 'styles/toggleGroup.css'


const App = () => {
	const [email, setEmail] = useState();

	return (
		<>
			<div className="yourQuoteContainer">
				<h2>Your Quote</h2>
				<div className="quoteCardSuper">
					<div className="quoteCard">hey</div>
				</div>
			</div>
			<div className='emailQuote'>
				<label>
					Send your quote via email to save it and come back later
				</label>

				<form className='emailSubmit'>
					<input type='text' value={email} placeholder="email@email.com" />
					<button className='minorButton button--blue'>send</button>
				</form>
				talk to our friendly customer service team on 0800 887 637
				<span className='or'>OR</span>
				<button className='mainButton button--dark-blue' >buy now</button>
			</div>
		</>
	);
}

export default App;