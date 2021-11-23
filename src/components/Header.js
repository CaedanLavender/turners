import React from "react";
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import turnerslogo from 'assets/turners-logo.jpg';

const Header = () => {
	return (
		<div>
		<div classNamee="header-top">
			<div className="header-options">
			<button type="button" className="header-options-text" onClick="">Cars</button>
			<button type="button" className="header-options-text" onClick="">Trucks &amp; machinery </button>
			<button type="button" className="header-options-text" onClick="">Damaged &amp; end of lide</button>
			<button type="button" className="header-options-text" onClick="">Boats &amp; marine</button>
			<button type="button" className="header-options-text" onClick="">Motorcycles &amp; scooters</button>
			<button type="button" className="header-options-text" onClick="">General goods</button>
			<button type="button" className="header-options-text" onClick="">Buses, caravans &amp; motorhomes</button>
			</div>
			<div className="header-info">
			<div className="header-info-left">
			<a className="header-text" href="/Home.js"></a></div>
			<div className="header-info-right">
			<button type="button" className="header-info-buttons" onClick=""><AccountCircleIcon/> LOGIN or REGISTER</button>
			<button type="button" className="header-info-buttons" onClick=""><LocalPhoneIcon/> 0800 887 637</button>
			<button type="button" className="header-info-buttons" onClick=""><AddLocationIcon/> Find Us</button>
			</div>
			</div>
		</div>
		<div className="navbar">
			<div className="navbar-leftside">
				<div className="nav-links">
				<button type="button" className="header-text" onClick="">Buy</button>
				<button type="button" className="header-text" onClick="">Sell</button>
				<button type="button" className="header-text" onClick="">Finance</button>
				<a className="header-text" href="/Insurance.js">Insurance</a>
				<a className="header-text" href="/Quote.js">Quote</a>
				<button type="button" className="header-text" onClick="">Careers</button>
				<input type="text" placeholder="Search..."/>
				</div>
			</div>
			<div className="navbar-rightside">
			<button type="button" className="header-right-text" onClick="">Auction &amp; events</button>
			<button type="button" className="header-right-text" onClick="">Services &amp; information</button>
			</div>
		</div>
		</div>
	)
}

export default Header;