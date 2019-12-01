import React, { useEffect } from 'react';
import NavBar from './NavBar.js';
import LeaderBoard from './Leaderboard.js';
import BucketList from './BucketList.js';
import FoodHistory from './FoodHistory.js';
import RecommendFood from './RecommendFood.js';
import Following from './Following.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Home extends React.Component{

  render() { return <div id="main"><div id = "home" className = "app">	
  <div className="buttonContainer">
	<div className="app-header-home">
		<div className="app-logo">
			<img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={{width:'400px'}} />
			<h3>Welcome Back!</h3>
                </div>
       	</div>
  	<Link to="/bucketlist"><i className="fab fa-bitbucket fa-fw"></i>Places to Visit</Link>
	<Link to="/foodhistory"><i className="fas fa-utensils fa-fw"></i>Your History</Link>
	<Link to="/following"><i className="fab fa-bitbucket fa-fw"></i>Following</Link>
	<Link to="/leaderboard"><i className="fas fa-clipboard-list fa-fw"></i>Check Standings</Link>
	<Link to="/recommendfood"><i className="fas fa-cookie-bite fa-fw" ></i>Our Suggestions</Link>  
 	</div>
         </div>
		 </div>
	}
}

