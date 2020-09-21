import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

class Home extends Component {
	 render() {
	 	return (
	 	<>
	 	<Hero>
	 		<Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $298">
	 		<Link to="/rooms" className="btn-primary">
	 		our Rooms
	 		</Link>
	 	 	</Banner>
	 	 </Hero>
		<Services />
		<FeaturedRooms />
	 	 </>
	 	);
	}
}
export default Home;
