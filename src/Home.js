import React, { useEffect } from 'react';import NavBar from './NavBar.js';
import LeaderBoard from './Leaderboard.js';
import BucketList from './BucketList.js';
import FoodHistory from './FoodHistory.js';
import RecommendFood from './RecommendFood.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Home extends React.Component{

  render() { return <div id = "home" className = "app">	
        <div class = "nav">
      <div class = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
        <div className = "container2">
				        <div id = "login-page" className="app-header">
				            <div className="app-logo">
				                <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={{width:'400px'}} />
				            </div>
				            <h3>Welcome Back!</h3>
				        </div>
				    </div>
			    </div>
	}
}

