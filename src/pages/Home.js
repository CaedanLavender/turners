import React from "react";
import './Home.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Home = () => {
	return (  
		<div className="home-container">
		<div className="home-title">Buy, Sell, Finance and insure</div>
		<div className="home-cars" style={{backgroundImage: "url('/turners-background.png')", backgroundSize: "cover",height: "50vh"}}>
			<div className="home-cars-textfield">
			<input type="text" placeholder="Search..."/>
			</div>
			<div className="home-cars-grid">
				<div className="turners-cars"><img src="turners-1.png" className="home-pic-grid" alt=""/></div>
				<div className="turners-cars"><img src="turners-2.png" className="home-pic-grid" alt=""/></div>
				<div className="turners-cars"><img src="turners-3.png" className="home-pic-grid" alt=""/></div>
				<div className="turners-cars"><img src="turners-4.png" className="home-pic-grid" alt=""/></div>
				<div className="turners-cars"><img src="turners-5.png" className="home-pic-grid" alt=""/></div>
				<div className="turners-cars"><img src="turners-6.png" className="home-pic-grid" alt=""/></div>
				
			</div>

		</div>
		<div className="home-3">
		<button type="button" className="home-btns" onClick="">Buy cars</button>
		<button type="button" className="home-btns" onClick="">Sell cars</button>
		<button type="button" className="home-btns" onClick="">Finance</button>
		<button type="button" className="home-btns" onClick="">Insure</button>
		</div>
		<div className="home-ads">
			<div className="ads-pics"><img src="turners-7.png" className="home-ads-grid" alt=""/></div>
			<div className="ads-pics"><img src="turners-8.png" className="home-ads-grid" alt=""/></div>
			<div className="ads-pics"><img src="turners-9.png" className="home-ads-grid" alt=""/></div>

		</div>
		<div className="home-info">
			<div className="home-info-left"><img src="turners-10.png" className="home-info-grid" alt=""/></div>
			<div className="home-info-right" style={{backgroundImage: "url('/turners-11.png')"}}>
			<h1 className="home-info-right-text">Upcoming auction events <CalendarTodayIcon style={{height:"50px", width: "50px"}}/></h1>
			<p className="home-info-right-dates">
				17th November: <br/>
				Vintage Car Auction - Auckland <br/>
				All Vehicles - Dunedin <br/>
				Commercial Auction - Wellington <br/>
				<br/>
				18th November: <br/>
				$8000 and over - Hamliton <br/>
				All Vehicles - Wellington <br/>
				<br/>
				19th November: <br/>
				Trade Me Clearance - Christchurch <br/>
				All Vehicles - Palmerston North
			</p>
			</div>
		</div>
		</div>
	);
}

export default Home;