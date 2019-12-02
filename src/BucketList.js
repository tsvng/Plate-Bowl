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
      var duplicateTerm = false;
      var duplicateTermIndex = 0;

      for(var i = 0; i < userBucketlistArray.length; i++)
        if(term == userBucketlistArray[i])
        {
          duplicateTerm = true;
          duplicateTermIndex = i;
        }

      if(!duplicateTerm)
        userBucketlistArray.push(term);
      else
        userBucketlistArray.splice(duplicateTermIndex,1);

      await API.graphql(graphqlOperation(updateUser, {input:{username: currentUser, bucketlist: userBucketlistArray}}));
      getBucketList();
    }

    EditEntryButton.addEventListener('click', (evt) => {
      editBucketlist();
    });
  }


  render(){
    return <div id='main' className = "bucket">
              
                <h1> Bucket List </h1>
                <input type="text" id="searchInput" placeholder="Type a cuisine you'd like to add, or type a cuisine already in your list to delete it."/> 
                <span className="addBtn" id='EditEventButton'>Edit List</span>
                <br></br><br></br><br></br>
                <div className = "containerLeaderBoard">
                    <div id='QueryResult'></div>
                </div>
           </div>;
  }



}
