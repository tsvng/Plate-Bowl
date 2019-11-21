import React from 'react';

export default class Home extends React.Component{
	render(){
		return (
			<div>
				<div id = "main">	
				    <div className="app">
				        <div className="app-header">
				            <div className="app-logo">
				                <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={{width:'200px'}} />
				            </div>
				            <h1>Home Page</h1>
				        </div>
				    </div>
				    <div id="bucketPreview" className="preview">
				    	<h1>Your Bucket List</h1>
				    </div>
				    <div id="foodHistPreview" className="preview">
				    	<h1>Your Food History</h1>
				    </div>
				    <div id="leaderBoard" className= "preview">
				    	<h1>Leaderboard</h1>
				    </div>
			    </div>
			</div>
		);
	}
}