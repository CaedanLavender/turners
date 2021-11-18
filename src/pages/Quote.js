import React from "react";
import { useState } from "react";
import 'styles/Quote.css';

// COMPONENT IMPORTS
import ToggleGroup from "components/ToggleGroup";
import QuoteForm from 'components/Quote/QuoteForm';

const Quote = () => {
	const insuranceTypes = [
		'comprehensive insurance',
		'third party insurance',
		'mechanical breakdown insurance'
	]
	const [insuranceType, setInsuranceType] = useState(insuranceTypes[0]);

	const handleSetInsuranceType = (type) => {setInsuranceType(type)}

	return (
		<>
			<section className='quote__header'>
				<h1>get a quote for:</h1>
				<ToggleGroup items={insuranceTypes} activeItem={insuranceType} setActiveItem={handleSetInsuranceType}/>
			</section>
			<section className='quote__body'>
				<div className='formContainer'>
					<QuoteForm />
				</div>
			</section>
		</>
	);
}

export default Quote;