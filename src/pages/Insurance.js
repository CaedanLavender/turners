import React from "react";
import ToggleGroup from "components/Insurance/ToggleGroup";
import 'styles/Insurance.css';
import { useState } from "react";

const Insurance = () => {
	const insuranceTypes = [
		'comprehensive insurance',
		'third party insurance',
		'mechanical breakdown insurance'
	]
	const [insuranceType, setInsuranceType] = useState(insuranceTypes[0]);

	const handleSetInsuranceType = (type) => {setInsuranceType(type)}

	return (
		<>
			<section className='insurance__header'>
				<h1>get a quote for:</h1>
				<ToggleGroup items={insuranceTypes} activeItem={insuranceType} setActiveItem={handleSetInsuranceType}/>
			</section>
			<section className='insurance__body'>

			</section>
		</>
	);
}

export default Insurance;