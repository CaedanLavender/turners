import React, { useState } from 'react'
import 'styles/Quote.css'
import FormCar from 'components/Quote/FormCar'
import YourQuote from 'components/Quote/YourQuote'

const QuoteForm = ({ insuranceType }) => {
	const [quoteNumber, setQuoteNumber] = useState();

	if (!quoteNumber) {
		return (
			<section className='quote__body'>
				<div className='formContainer'>
					<FormCar className='form'
						insuranceType={insuranceType}
						quote={quoteNumber}
						setQuote={setQuoteNumber}
					/>
				</div>
				<aside className="quoteSideContent">
					<h2>Why insure with us?</h2>
					<ul>
						<li>best value car insurance</li>
						<li>most trusted used car dealership in NZ</li>
						<li>provide quality assurance</li>
						<li>provide qualtiy assurance</li>
					</ul>
				</aside>
			</section>
		)
	} else if (quoteNumber) {
		return (
			<section className='quote__body'>
				<div className='formContainer'>
					<YourQuote quote={quoteNumber} />
				</div>
			</section>
		)
	}
}

export default QuoteForm