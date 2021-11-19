import axios from "axios";
import React, { useState, useEffect } from "react";
import 'styles/Quote.css'
import ToggleSwitch from "components/ToggleSwitch";
import SelectList from 'components/SelectList'

const FormCar = () => {
	const driverTemplate = {
		dob: "",
		gender: "m",
		licenceType: "",
		licenceTime: "",
		incident: "n",
	}

	const typeOfLicence = [
		"learners",
		"restricted",
		"full",
		"international"
	]

	const timeOnLicence = [
		"under 1 year",
		"1-2 years",
		"2-4 years",
		"5 years +"
	]

	const [carFormData, setCarFormData] = useState({
		registration: "",
		business: "n",
		address: "",
		startDate: "",
	});
	const [driverFormData, setDriverFormData] = useState([driverTemplate]);
	const [carData, setCarData] = useState();
	const [selectedCar, setSelectedCar] = useState("")

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

	const setGender = (value) => {
		setDriverFormData(driverFormData.map((driver, i) => i === 0 ? ({ ...driver, gender: value }) : driver))
	}

	const setLicence = (value) => {
		setDriverFormData(driverFormData.map((driver, i) => i === 0 ? ({ ...driver, licenceType: value }) : driver))
	}

	const setLicenceTime = (value) => {
		setDriverFormData(driverFormData.map((driver, i) => i === 0 ? ({ ...driver, licenceTime: value }) : driver))
	}

	const setIncident = (value) => {
		setDriverFormData(driverFormData.map((driver, i) => i === 0 ? ({ ...driver, incident: value }) : driver))
	}

	const getCarData = () => {
		axios.get('http://localhost:4000/plate', {
			params: {
				plate: carFormData.registration
			}
		})
		.then(res => setCarData(res.data))
		.catch(() => console.log("There was a catch error"))
	}


	return (
		<>
			<h1 className="form">Car</h1>
			<div className='formSection'>
				<label><div className='labelText'>registration of car</div>
					<div className='formSection__right'>
						<input type="text"
							placeholder="e.g. ABC123"
							value={carFormData.registration}
							onChange={(e) => setCarFormData({ ...carFormData, registration: e.target.value })}
						/>
						<div className='searchButton' onClick={getCarData}>Search</div>
						<div className='radioOutput'>
							<div className={`carDataLabel ${carData || "hidden"}`}>
								<input type='radio' checked={carData === selectedCar} onChange={() => setSelectedCar(carData)} id='carSelect' value={carData}/>
								{carData}
							</div>
						</div>
					</div>
				</label>
			</div>

			<div className='formSection'>
				<label><div className="labelText">used for business</div>
					<div className='formSection__right'>
						<ToggleSwitch switches={["y", "n"]} activeSwitch={carFormData.business} setSwitch={setBusiness} />
					</div>
				</label>
			</div>

			<div className='formSection'>
				<label><div className="labelText">address</div>
					<div className='formSection__right'>
						<input type="text"
							placeholder="e.g. 123 Smith St"
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
							placeholder="DD / MM / YYYY"
							value={carFormData.startDate}
							onChange={(e) => setCarFormData({ ...carFormData, startDate: e.target.value })}
						/>
					</div>
				</label>
			</div>

			{
				driverFormData.map((driver, i) => (
					<>
						<h1>Driver {driverFormData.length > 1 && i + 1}</h1>

						<div className='formSection'>
							<label><div className="labelText">date of birth</div>
								<div className='formSection__right'>
									<input type="text"
										placeholder="DD / MM / YYYY"
										value={driverFormData.dob}
										onChange={
											(e) => {
												setDriverFormData(driverFormData.map((driverr, ii) => ii === i ? { ...driverr, dob: e.target.value } : driverr
												))
											}}
									/>
								</div>
							</label>
						</div>

						<div className='formSection'>
							<label><div className="labelText">gender</div>
								<div className='formSection__right'>
									<ToggleSwitch switches={["m", "f"]} activeSwitch={driverFormData[0].gender} setSwitch={setGender} />
								</div>
							</label>
						</div>

						<div className='formSection'>
							<label><div className="labelText">type of licence</div>
								<SelectList list={typeOfLicence} activeItem={driverFormData[0].licenceType} setItem={setLicence} />
							</label>
						</div>

						<div className='formSection'>
							<label><div className="labelText">time you've had your licence</div>
								<SelectList list={timeOnLicence} activeItem={driverFormData[0].licenceTime} setItem={setLicenceTime} />
							</label>
						</div>

						<div className='formSection'>
							<label><div className="labelText">had a claim/incident(s) in the last 5 years?</div>
								<div className='formSection__right'>
									<ToggleSwitch switches={["y", "n"]} activeSwitch={driverFormData[0].incident} setSwitch={setIncident} />
								</div>
							</label>
						</div>

						{/* <button onClick={addDriver}>Add Driver</button> */}
					</>
				))
			}
		</>

	)
}

export default FormCar;