import React from 'react';

export default class BucketList extends React.Component{
	// Create a "close" button and append it to each list item
	render(){
		return <div id='main' className = "bucket">
      <div class = "nav">
      <div class = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
			<h1> Bucket List </h1>
		</ div>;
	}
}