import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
import Amplify, { Auth, Hub } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import { createUser, createTodo } from './graphql/mutations'
import { listUsers, listTodos, getUser } from './graphql/queries';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Leaderboard from './Leaderboard.js';

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

Amplify.configure({
  Auth: {
    IdentityPoolId: 'us-east-1:3198bc65-dde4-426c-bdde-b35ac383f330',
    region: 'us-east-1',
    userPoolId: 'us-east-1_uLqyIsqnt',
    userPoolWebClientId: '224uf0oqjqib1oac70r3jd24g3',
    mandatorySignIn: true,
    oauth: {
      domain: 'platenbowl.auth.us-east-1.amazoncognito.com',
      scope: ['phone','email','profile','openid','aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://master.d1artn8nksk20o.amplifyapp.com',
      redirectSignOut: 'https://master.d1artn8nksk20o.amplifyapp.com',
      responseType: 'token'
    }
  }
  });
export default class BucketList extends React.Component{
	// Create a "close" button and append it to each list item
  async componentDidMount(){
    const MutationButton = document.getElementById('MutationEventButton');
    const MutationResult = document.getElementById('MutationResult');

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');

    //This function displays the user's bucketlist
    async function getBucketList() {
      MutationResult.innerHTML = ``;
      QueryResult.innerHTML = ``;
      //List own user's bucketlist by using getUser
      API.graphql(graphqlOperation(getUser, {username:'triggertest'})).then((evt) => {
        evt.data.getUser.map((Food,i) => 
        QueryResult.innerHTML += `<p>${Food.bucketlist}</p>`
        );
      })
    }

    getBucketList();

  }


	render(){
		return <div id='main' className = "bucket">
      <div className = "nav">
      <div className = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
			<h1> Bucket List </h1>
      <button id='MutationEventButton'>Add Entry</button>
          <div id='MutationResult'></div>
          <div id='QueryResult'></div>
		</ div>;
	}
}