import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
import Amplify, { Auth, Hub } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import { createUser, createTodo, updateUser } from './graphql/mutations'
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
  async componentDidMount(){
    const EditEntryButton = document.getElementById('EditEventButton');

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');
    var userBucketlistArray = [];

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //This function displays the user's bucketlist
    async function getBucketList() {
      QueryResult.innerHTML = `<p></p>`;
      userBucketlistArray = []; //wipe array of old page data
      //List own user's bucketlist by using getUser
      API.graphql(graphqlOperation(getUser, {username: currentUser})).then((evt) => {
        evt.data.getUser.bucketlist.map((Food,i) => {
          QueryResult.innerHTML += `<p>${Food}</p>`
          userBucketlistArray.push(Food);
        });
      })
    }

    getBucketList();

    //This function mutates the Bucketlist
    async function editBucketlist(){
      var term = document.getElementById("searchInput").value;
      var duplicateTerms = 0;
      for(var i = 0; i < userBucketlistArray.length; i++)
        if(term == userBucketlistArray[i])
          duplicateTerms=i;

      if(duplicateTerms == 0)
        userBucketlistArray.push(term);
      else
        userBucketlistArray.splice(duplicateTerms,1);

      API.graphql(graphqlOperation(updateUser, {input:{username: currentUser, bucketlist: userBucketlistArray}}));
      await sleep(250);
      getBucketList();
    }

    EditEntryButton.addEventListener('click', (evt) => {
      editBucketlist();
    });
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
      <input type="text" id="searchInput" placeholder="Type a cuisine you'd like to add, or type a cusine already in your list to delete it."/> 
      <span className="addBtn" id='EditEventButton'>Edit List</span>
      <br></br>
          <div id='QueryResult'></div>
    </ div>;
  }



}

