import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
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

    /*const MutationButton = document.getElementById('MutationEventButton');
    const MutationResult = document.getElementById('MutationResult');

    MutationButton.addEventListener('click', (evt) => {
      MutationResult.innerHTML = `MUTATION RESULTS:`;
      createNewUser().then( (evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createUser.username} - ${evt.data.createUser.points}</p>`
      })
    });*/

    /*MutationButton.addEventListener('click', (evt) => {
      MutationResult.innerHTML = `MUTATION RESULTS:`;
      createNewTodo().then( (evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createTodo.name} - ${evt.data.createTodo.description}</p>`
      })
    });*/


    const QueryResult = document.getElementById('QueryResult');

    async function getLeaders() {
      QueryResult.innerHTML = `<p>User - Points</p>`;
      API.graphql(graphqlOperation(listUsers)).then((evt) => {
        evt.data.listUsers.items.map((user, i) => 
        QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
        );
      })
    }
    		
    getLeaders();

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
		return 
    <div id='main' className = 'leaderboard'>
      <div id = "content">
      <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={imgStyle} />
      </div>
      <div class = "nav">
      <div class = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard" >Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
					<h1>Leaderboard</h1>
					<div id='QueryResult'></div>
				</div>

	}
}

