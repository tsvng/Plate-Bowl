import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
import Amplify, { Auth, Hub } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import { createUser, createTodo } from './graphql/mutations'
import { listUsers, listTodos } from './graphql/queries';
import Home from './Home.js';
import NavBar from './NavBar.js';
import BucketList from './BucketList.js';

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

const imgStyle = {width: '80px'};
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
					
export default class LeaderBoard extends React.Component {
	async componentDidMount(){
		/*async function createNewUser() {
  			const userInput = { username: "bob" , points: 20}
  			return await API.graphql(graphqlOperation(createUser, { input: userInput }))
		}*/
    /*async function createNewTodo() {
      const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
      return await API.graphql(graphqlOperation(createTodo, { input: todo }))
    }*/

    const MutationButton = document.getElementById('MutationEventButton');
    const MutationResult = document.getElementById('MutationResult');
    var globalLeadersActive = false;

    /*MutationButton.addEventListener('click', (evt) => {
      MutationResult.innerHTML = `MUTATION RESULTS:`;
      createNewTodo().then( (evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createTodo.name} - ${evt.data.createTodo.description}</p>`
      })
    });*/

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');

    async function getFriendLeaders() {
      MutationResult.innerHTML = `<h4>${currentUser}'s Friend Leaderboard</h4>`;
      QueryResult.innerHTML = ``;
      API.graphql(graphqlOperation(listUsers, {filter:{friends:{contains:currentUser}}})).then((evt) => {
        evt.data.listUsers.items.map((user, i) => 
        QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
        );
      })
    }

    async function getGlobalLeaders() {
      MutationResult.innerHTML = `<h4>Global Leaderboard</h4>`;
      QueryResult.innerHTML = ``;
      API.graphql(graphqlOperation(listUsers)).then((evt) => {
        evt.data.listUsers.items.map((user, i) => 
        QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
        );
      })
    }

    MutationButton.addEventListener('click', leaderboardModeHandler())

    async function leaderboardModeHandler(){
      if(!globalLeadersActive)
      {
        getFriendLeaders();
        globalLeadersActive = true;
      }
      else
      {
        getGlobalLeaders();
        globalLeadersActive = false;
      }
    }


    /*async function getData() {
      QueryResult.innerHTML = `QUERY RESULTS`;
      API.graphql(graphqlOperation(listTodos)).then((evt) => {
        evt.data.listTodos.items.map((todo, i) => 
        QueryResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>`
        );
      })
    }

    getData();*/

    	}
	 render() {
    return <div id='main' className = "leaderboard">
      <div className = "nav">
      <div className = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard" >Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bowlby+One" />
          <button id='MutationEventButton'>Change Leaderboard</button>
          <div id='MutationResult'></div>
          <div id='QueryResult'></div>
        </div>

  }
}

