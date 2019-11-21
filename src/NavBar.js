import React from 'react';

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


	render(){
		return (
			<div>
				<script src="https://kit.fontawesome.com/43b2224741.js" crossOrigin="anonymous"></script>
				<div id="mySidenav" className="sidenav">
		  			<a href="javascript:void(0)" className="closebtn" onClick={()=>this.toggleNav()}>&times;</a>
		  			<a href="BucketList.html"><i className="fab fa-bitbucket fa-fw"></i> Bucket List</a>
			  		<a href="FoodHistory.html"><i className="fas fa-utensils fa-fw"></i> Food History</a>
		  			<a href="LeaderBoard.html"><i className="fas fa-clipboard-list fa-fw"></i> LeaderBoard</a>
		  			<a href="RecommendFood.html"><i className="fas fa-cookie-bite fa-fw" ></i> Explore Food</a>		
		  			<a href="index.html"><i className="fas fa-door-open fa-fw"></i> Logout</a>	
				</div>
				<button id = "floating-button" type="button" onClick={()=>this.toggleNav()}>&#9776;</button>
			</div>
		);
	}
}