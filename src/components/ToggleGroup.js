import React from "react";
import 'styles/toggleGroup.css';

const ToggleGroup = ({ items, activeItem, setActiveItem }) => {

	return (
		<div className='toggleContainer'>
			{
				items.map((item) => (
					<div
						className={`toggleContainer__item ${activeItem === item && 'active'}`}
						onClick={() => setActiveItem(item)}
					>
						{item}
					</div>
				))
			}

		</div>
	);
}

export default ToggleGroup;