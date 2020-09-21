import React, { Component } from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import Errors from "./pages/Error";
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedRooms from './components/FeaturedRooms';
class App extends Component {
	 render() {
	 	return(
	<>
		<Navbar />
	   	<Switch>
	   	<Route exact path="/" component={Home}/>
	   	<Route exact path="/rooms" component={Rooms}/>
	   	<Route exact path="/rooms/:slug" component={SingleRooms}/>
	   	<Route component={Errors} />
	   	</Switch>
   	</>
  );
	}
}

export default App;
