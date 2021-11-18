import React, { useState, useEffect } from "react";

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
			<label>Hey</label>
		<input type="text" value="testing" />
		</>
	)
}

export default FormCar;