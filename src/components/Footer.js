import React from "react";
import './Footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
	return (
		<div className="footer-container">
		<div className="footer-options">
			<div className="footer-cars">
				<h1 className="footer-title">Cars</h1>
				<button type="button" className="footer-text" onClick="">How to buy</button><br/>
				<button type="button" className="footer-text" onClick="">How to sell</button><br/>
				<button type="button" className="footer-text" onClick="">Auctions</button><br/>	
				<button type="button" className="footer-text" onClick="">Finance</button><br/>	
				<button type="button" className="footer-text" onClick="">Insurance</button>				
				</div>
			<div className="footer-cars">
			<h1 className="footer-title">Insurance</h1>
			<button type="button" className="footer-text" onClick="">Comprehensive</button><br/>	
			<button type="button" className="footer-text" onClick="">Third party</button><br/>	
			<button type="button" className="footer-text" onClick="">Third party, fire and theft</button><br/>	
			<button type="button" className="footer-text" onClick="">Mechanical</button><br/>	
			<button type="button" className="footer-text" onClick="">Breakdown</button>
			</div>
			<div className="footer-cars">
			<h1 className="footer-title">Search</h1>
			<button type="button" className="footer-text" onClick="">Cars</button><br/>	
			<button type="button" className="footer-text" onClick="">Finance</button><br/>	
			<button type="button" className="footer-text" onClick="">Insurance</button>	<br/>
			<button type="button" className="footer-text" onClick="">Other vehicles</button>	
			</div>
			<div className="footer-cars">
			<h1 className="footer-title">About us</h1>
			<button type="button" className="footer-text" onClick="">Company</button>	<br/>
			<button type="button" className="footer-text" onClick="">Find us</button>	<br/>
			<button type="button" className="footer-text" onClick="">Terms and Conditions</button><br/>	
			<button type="button" className="footer-text" onClick="">Contact us</button>
			</div>
			
		</div>
		<div className="footer-information">
			<div className="footer-tings1"><img src="turners-logo.jpg" className="footer-pic" alt=""/></div>
			<div className="footer-tings2"><p className="footer-text1">Call us on 0800 887 637</p></div>
			<div className="footer-tings3">
				<button type="button" className="logo-btns1" onclick=""><MailOutlineIcon style={{fill: "white",fontSize:"40px"}}/></button>
				<button type="button" className="logo-btns2" onclick=""><FacebookRoundedIcon style={{fill: "white",fontSize:"40px"}}/></button>
				<button type="button" className="logo-btns3" onclick=""><InstagramIcon style={{fill: "white",fontSize:"40px"}}/></button>
			</div>
			
			</div>
		</div>
	)
}

export default Footer;