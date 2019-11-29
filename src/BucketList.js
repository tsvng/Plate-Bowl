import React from 'react';
const imgStyle = {width: '70px'};

export default class BucketList extends React.Component{
	// Create a "close" button and append it to each list item
	render(){
		return <div id='main'>
		      <div id = "content">
      <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={imgStyle} />
      </div>
      <div class = "nav">
      <div class = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
			<h1> Fill in BucketList Code Here. </h1>
		</ div>;
	}
}