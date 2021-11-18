import React, { useState, useEffect } from "react";
import 'styles/Quote.css'

const FormCar = () => {
	const driverTemplate = {
		dob: "",
		gender: "",
		licenceType: "",
		licenceTime: "",
		incident: false,
	}

	const [carFormData, setCarFormData] = useState({
		registration: "",
		business: false,
		address: "",
		startDate: "",
	});
	const [driverFormData, setDriverFormData] = useState([driverTemplate]);

	const addDriver = () => {
		setDriverFormData([...driverFormData, driverTemplate])
	}

	return (
		<>
			<h1 className="form">Car</h1>
			<div className='formSection'>
				<label>registration of car
					<input type="text"
						value={carFormData.registration}
						onChange={(e) => setCarFormData({ ...carFormData, registration: e.target.value })}
					/>
				</label>
			</div>
			<div className='formSection'>
				<label>used for business
					<input type="text"
						value={carFormData.registration}
						onChange={(e) => setCarFormData({ ...carFormData, registration: e.target.value })}
					/>
				</label>
			</div>
		</>
	)
}

export default FormCar;