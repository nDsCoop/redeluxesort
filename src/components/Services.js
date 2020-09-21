import React, { Component } from 'react';
// import Hero from "../components/Hero";
// import Banner from '../components/Banner';
// import {Link} from 'react-router-dom';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
	state = {
		service:[
		{
			icon:<FaCocktail/>,
			title:"free Cocktail",
			info:'Loren ipsum dolor sit amet consectetur adipsicing elit!'
		},
		{
			icon:<FaHiking/>,
			title:"End Hiking",
			info:'Loren ipsum dolor sit amet consectetur adipsicing elit!'
		},
		{
			icon:<FaBeer/>,
			title:"Strongest Beer",
			info:'Loren ipsum dolor sit amet consectetur adipsicing elit!'
		},
		{
			icon:<FaShuttleVan/>,
			title:"Free Shuttle",
			info:'Loren ipsum dolor sit amet consectetur adipsicing elit!'
		},
		]
	}
	 render() {
	 	return(
	 		<>
 			<section className="services">
 				<Title title="services" />
 				<div className="services-center">
 					{this.state.service.map((item, index) => {
 						return (
 						<article key={index} className="service">
	 						<span>{item.icon}</span>
	 						<h6>{item.title}</h6>
	 						<p>{item.info}</p>
	 					</article>
	 					)
	 					})	
 					}
 				</div>
 			</section>
			</>
	 		);
	 }
}
export default Services;