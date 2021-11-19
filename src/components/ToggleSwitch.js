import React from "react";
import 'styles/toggleGroup.css'


const ToggleSwitch = ({ switches, activeSwitch, setSwitch }) => {
	return (
		<div className='toggleSwitchContainer'>
			{
				switches.map((item) => (
					<div
						className={`toggleSwitch__item ${activeSwitch === item && 'active'}`}
						onClick={() => setSwitch(item)}
					>
						{item}
					</div>
				))
			}
		</div>
	)
}

export default ToggleSwitch;