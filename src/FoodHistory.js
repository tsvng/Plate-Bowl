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
import { selectInput } from '@aws-amplify/ui';
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

export default class FoodHistory extends React.Component{

	async componentDidMount(){
    var userFoodListArray = [];
    const currentUser = (await Auth.currentAuthenticatedUser()).username;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getFoodList() {
      console.log("getting food list in food history")
      userFoodListArray = []; //wipe array of old page data
      //List own user's bucketlist by using getUser
        API.graphql(graphqlOperation(getUser, {username: currentUser})).then((evt) => {
        if(evt.data.getUser.foodhistory!=null){
        evt.data.getUser.foodhistory.map((Food,i) => {
          userFoodListArray.push(Food);
        });}
      })
      return 1;
    }
    getFoodList();
    await sleep(1000);
    console.log(userFoodListArray);
    for(let i = 0;i<userFoodListArray.length;i++){
      var restaurant = JSON.parse(userFoodListArray[i]);
      var pic = restaurant['image_url'];
      var name = restaurant['name'];
      var genre = restaurant['genre'];
      console.log(pic);
      console.log(name);
      console.log(genre);
    }
  }
       
	// Create a "close" button and append it to each list item
	render(){
    const h1Style ={
            color: "#BBB2AB",
            font: "Perpetua",
            fontSize: '58px',
        }

		return <div id='main' className = "history">
			<h1> Food History </h1>
      <div id = "FoodHistoryDisplay"></div>
		</div>;
	}
}