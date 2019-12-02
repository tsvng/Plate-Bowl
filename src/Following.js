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
export default class Following extends React.Component{
  async componentDidMount(){
    const EditFollowingButton = document.getElementById('EditFollowingEventButton');

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');
    var userFollowlistArray = [];
    var otheruserFollowlistArray= [];

    //This function displays the user's follow list
    async function getFollowingList() {
      QueryResult.innerHTML = `<p></p>`;
      userFollowlistArray = []; //wipe array of old page data
      //List own user's follow list by using getUser
      await API.graphql(graphqlOperation(getUser, {username: currentUser})).then((evt) => {
        evt.data.getUser.friends.map((follower,i) => {
          QueryResult.innerHTML += `<p>${follower}</p>`
          userFollowlistArray.push(follower);
        });
      })
    }

    async function getOtherUserFollowerList(otherUser) {
      otheruserFollowlistArray = []; //wipe array of old page data
      await API.graphql(graphqlOperation(getUser, {username: otherUser})).then((evt) => {
        evt.data.getUser.friends.map((follower,i) => {
          otheruserFollowlistArray.push(follower);
        });
      })
    }

    //This function mutates the follow list
    async function editFollowinglist(){
      var term = document.getElementById("searchInput").value;
      var duplicateTerm = false;
      var duplicateTermIndex = 0;



      for(var i = 0; i < userFollowlistArray.length; i++)
        if(term == userFollowlistArray[i])
        {
          duplicateTerm = true;
          duplicateTermIndex = i
        }

      if(!duplicateTerm)
        userFollowlistArray.push(term);
      else
        userFollowlistArray.splice(duplicateTermIndex,1);

      await API.graphql(graphqlOperation(updateUser, {input:{username: currentUser, friends: userFollowlistArray}}));

      getFollowingList();
    }

    async function editOtherFollowerlist(){
      var term = document.getElementById("searchInput").value;
      await getOtherUserFollowerList(term);   
      var duplicateTerm = false;
      var duplicateTermIndex = 0;

      for(var i = 0; i < otheruserFollowlistArray.length; i++)
        if(currentUser == otheruserFollowlistArray[i])
        {
          duplicateTerm = true
          duplicateTermIndex = i;
        }

      if(!duplicateTerm)
        otheruserFollowlistArray.push(currentUser);
      else
        otheruserFollowlistArray.splice(duplicateTermIndex,1);

      await API.graphql(graphqlOperation(updateUser, {input:{username: term, friends: otheruserFollowlistArray}}));
    }

    getFollowingList();
    EditFollowingButton.addEventListener('click', (evt) => {
      if(API.graphql(graphqlOperation(getUser, {username: document.getElementById("searchInput").value})))
      {
        editFollowinglist();
        editOtherFollowerlist();
      }
      else
        console.log("user does not exist");
      
    });

  }

  

  render(){
    return <div id='main' className = "follow">
              <h1> Follow List </h1>
              <input type="text" id="searchInput" placeholder="Type a user you'd like to follow, or type a user already in your list to unfollow."/> 
              <span className="addBtn" id='EditFollowingEventButton'>Add/Remove Follow</span>
              <br></br><br></br><br></br>
              <div id='QueryResult'></div>
           </div>;
          }
}