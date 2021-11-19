import React, { useState } from "react";

const SelectList = ({ list, activeItem, setItem }) => {
	const [dropIsDown, setDropIsDown] = useState(false);

	const toggleDropDown = () => {
		setDropIsDown(!dropIsDown)
	}
	
	const handleListSelection = (item) => {
		setItem(item)
		toggleDropDown();
	}

	return (
		<div className='selectList'>
			<div className='selectItem selected' onClick={toggleDropDown}>{activeItem || "select one"}</div>
			<div className={`selectListDropDown ${dropIsDown || 'hidden'}`}>
				{
					list.map((item) => (
						<div className='selectItem' onClick={() => handleListSelection(item)}>{item}</div>
					))
				}
			</div>
		</div>
	)
}

export default SelectList;