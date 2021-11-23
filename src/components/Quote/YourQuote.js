import axios from "axios";
import React, { useState } from "react";
import 'styles/Quote.css'
import 'styles/toggleGroup.css'


const App = ({ quote }) => {
	const [email, setEmail] = useState();

	const remoteURL = "http://api-turners.herokuapp.com/"
	const localURL = "http://localhost:4000/"

	const handleQuoteEmail = () => {
		console.log('executed function')
		const config = {
			method: 'get',
			url: localURL + 'quotes/send',
			params: {
				quoteId: quote,
				email: email
			}
		};

		axios(config)
			.then(res => {
				console.log(res)
			})
			.catch(() => console.log("There was a catch error"))
	}

	return (
		<>
			<div className="yourQuoteContainer">
				<h2>Your Quote</h2>
				<h3>Quote No. {quote}</h3>
				<div className="quoteCardSuper">
					<div className="quoteCard">hey</div>
				</div>
			</div>
			<div className='emailQuote'>
				<label>
					Send your quote via email to save it and come back later
				</label>

				<form className='emailSubmit'>
					<input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@email.com" />
					<button type="button" className='minorButton button--blue' onClick={handleQuoteEmail}>send</button>
				</form>
				talk to our friendly customer service team on 0800 887 637
				<span className='or'>OR</span>
				<button className='mainButton button--dark-blue' >buy now</button>
			</div>
		</>
	);
}

export default App;