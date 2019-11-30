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
				        <div id = "login-page" className="app-header">
				            <div className="app-logo">
				                <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={{width:'400px'}} />
				              <h3>Welcome Back!</h3>
                    </div>
              <div className="buttonContainer">
                  <a class = "a a1" href="#leaderboard">Check Standings</a>
                  <a class = "a a2" href="#bucketlist">Places to Visit</a>
                  <a class = "a a3" href="#foodhistory">Your History</a>
                  <a class = "a a4" href="#recommendFood">Our Suggestions</a>
				    </div>
            </div>
			    </div>
	}
}

