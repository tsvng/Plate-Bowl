import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Amplify, { Auth, Hub } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitBucket } from '@fortawesome/free-brands-svg-icons'
import { faUtensils, faCookie, faClipBoard, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component{
	constructor(props) {
    super(props);
    this.state = { menuState: 0 };
  	}

	toggleNav(){
		if(this.state.menuState ==0){
			this.setState({menuState:1})
			this.openNav();
		}
		else if(this.state.menuState ==1){
			this.setState({menuState:0});
			this.closeNav();
		}
	}
	openNav() {
		if(document.getElementById("mySidenav")&&
			document.getElementById("floating-button")&&
			document.getElementById("main")
			){
	  		document.getElementById("mySidenav").style.width = "250px";
	  		document.getElementById("floating-button").style.marginLeft = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
		}
	}
	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	closeNav() {
		if(document.getElementById("mySidenav")&&
			document.getElementById("floating-button")&&
			document.getElementById("main")
			){
	  		document.getElementById("mySidenav").style.width = "0px";
	  		document.getElementById("floating-button").style.marginLeft = "0px";
	  		document.getElementById("main").style.marginLeft = "0px";
		}
	}
	signOut() {
		Auth.signOut()
    	.then(data => console.log(data))
    	.catch(err => console.log(err));}
	render(){
		return (
			<div>
				<script src="https://kit.fontawesome.com/43b2224741.js" crossOrigin="anonymous"></script>
				<div id="mySidenav" className="sidenav">
		  			<a href="javascript:void(0)" className="closebtn" onClick={()=>this.toggleNav()}>&times;</a>
		  			<Link to="/bucketlist"><i className="fab fa-bitbucket fa-fw"></i>BucketList</Link>
			  		<Link to="/foodhistory"><i className="fas fa-utensils fa-fw"></i>FoodHistory</Link>
		  			<Link to="/leaderboard"><i className="fas fa-clipboard-list fa-fw"></i>LeaderBoard</Link>
		  			<Link to="/recommendfood"><i className="fas fa-cookie-bite fa-fw" ></i>RecommendFood</Link>		
		  			<Link to="/home"><i className="fas fa-door-open fa-fw"></i>Home</Link>
		  			<button id = "logout" onClick={()=>this.signOut()}>LogOut</button>
				</div>
				<button id = "floating-button" type="button" onClick={()=>this.toggleNav()}>&#9776;</button>
			</div>
		);
	}
}