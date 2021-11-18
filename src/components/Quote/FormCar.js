import React, { useState, useEffect } from "react";
import 'styles/Quote.css'
import ToggleSwitch from "components/ToggleSwitch";

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
		business: "n",
		address: "",
		startDate: "",
	});
	const [driverFormData, setDriverFormData] = useState([driverTemplate]);

	const addDriver = () => {
		setDriverFormData([...driverFormData, driverTemplate])
	}

	const removeDriver = (index) => {
		const newArray = driverFormData.filter((driver, i) => i !== index)
		setDriverFormData(newArray)
	
	}

	const setBusiness = (value) => {
		setCarFormData({ ...carFormData, business: value })
	}

	return (
		<>
			<h1 className="form">Car</h1>
			<div className='formSection'>
				<label>registration of car
					<div className='formSection__right'>
						<input type="text"
							value={carFormData.registration}
							onChange={(e) => setCarFormData({ ...carFormData, registration: e.target.value })}
						/>
					</div>
				</label>
			</div>

			<div className='formSection'>
				<label>used for business
					<div className='formSection__right'>
						<ToggleSwitch switches={["y", "n"]} activeSwitch={carFormData.business} setSwitch={setBusiness} />
					</div>
				</label>
			</div>

			<div className='formSection'>
				<label>address
					<div className='formSection__right'>
						<input type="text"
							value={carFormData.address}
							onChange={(e) => setCarFormData({ ...carFormData, address: e.target.value })}
						/>
					</div>
				</label>
			</div>

			<div className='formSection'>
				<label>start date
					<div className='formSection__right'>
						<input type="text"
							value={carFormData.startDate}
							onChange={(e) => setCarFormData({ ...carFormData, startDate: e.target.value })}
						/>
					</div>
				</label>
			</div>

			{
				driverFormData.map((driver, i) => (
					<>
						<h1>Driver {driverFormData.length > 1 && i + 1 }</h1>

						<div className='formSection'>
							<label>date of birth
								<div className='formSection__right'>
									<input type="text"
										value={driverFormData.dob}
										onChange={
											(e) => {
											setDriverFormData(driverFormData.map((driverr, ii) => ii === i ? {...driverr, dob: e.target.value} : driverr
										))}}
									/>
								</div>
							</label>
						</div>

						<button onClick={addDriver}>Add Driver</button>
					</>
				))
			}
		</>

	)
}

export default FormCar;