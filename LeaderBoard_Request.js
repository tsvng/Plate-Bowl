import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { API, graphQLOperation } from 'aws-amplify';
import './style.css';

const ListUsers = `
	query {
  		listUsers {
    		items {
      			username
      			points
    		}
  		}
	}
 `


class LeaderboardCreate extends Component{

 	state = { leaderboard: []}

	async componentDidMount(){
 		const leaderboardData = await API.graphql(graphQLOperation(ListUsers))
 		this.setState({ leaderboard: leaderboardData.data.listUsers.items })
 	}

	render(){
		return (
			
			this.state.leaderboard.map((user, i) =>
				
				{user.username,
				user.points}
				
			)
			

		);
				

	}
}

 
