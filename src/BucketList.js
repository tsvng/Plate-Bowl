import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
import Amplify, { Auth, Hub } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import { createUser, updateUser } from './graphql/mutations'
import { listUsers, getUser } from './graphql/queries';
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
/*     const EditEntryButton = document.getElementById('EditEventButton');

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');
    var userBucketlistArray = [];

    //This function displays the user's bucketlist
    async function getBucketlist() {
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

    getBucketlist();

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
      getBucketlist();
    }

    EditEntryButton.addEventListener('click', (evt) => {
      editBucketlist();
    }); */
    var userBucketListArray = [];
    const currentUser = (await Auth.currentAuthenticatedUser()).username;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function deleteFromHistory(){
      var ID = this.id;
      var element =document.getElementById("bucket".concat("-",ID));
      var img_url = element.getElementsByTagName("img")[0].src;
      for(let j = 0;j<userBucketListArray.length;j++){
        if(userBucketListArray[j].indexOf(img_url)!= -1){
          userBucketListArray.splice(j,1);
          j--;
        }
      }
      element.parentNode.removeChild(element);
      API.graphql(graphqlOperation(updateUser, {input:{username: currentUser, bucketlist: userBucketListArray}}));
    }

    function getFoodList() {
      console.log("getting food list in food history")
      userBucketListArray = []; //wipe array of old page data
      //List own user's bucketlist by using getUser
        API.graphql(graphqlOperation(getUser, {username: currentUser})).then((evt) => {
        if(evt.data.getUser.bucketlist!=null){
        evt.data.getUser.bucketlist.map((Food,i) => {
          userBucketListArray.push(Food);
        });}
      })
      return 1;
    }
    getFoodList();
    await sleep(1000);
    console.log(userBucketListArray);
    //userBucketListArray = ['{"name":"Diddy Riese Cookies","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/nGfKbkB51YDIdDGjVol6Qg/o.jpg","genre":"Desserts"}', '{"name":"Starbucks","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/nGfKbkB51YDIdDGjVol6Qg/o.jpg","genre":"Coffee & Tea"}','{"name":"Diddy Riese Cookies","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/nGfKbkB51YDIdDGjVol6Qg/o.jpg","genre":"Desserts"}','{"name":"Diddy Riese Cookies","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/nGfKbkB51YDIdDGjVol6Qg/o.jpg","genre":"Desserts"}','{"name":"Diddy Riese Cookies","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/nGfKbkB51YDIdDGjVol6Qg/o.jpg","genre":"Desserts"}']
    for(let i = 0;i<userBucketListArray.length;i++){
      var restaurant = JSON.parse(userBucketListArray[i]);
      var pic = restaurant['image_url'];
      var name = restaurant['name'];
      var genre = restaurant['genre'];
      var wrap = document.createElement("div");
      wrap.className = "wrapper";
      wrap.id = "bucket".concat("-",i.toString());
      var textDiv = document.createElement("div");
      textDiv.className = "text";
      textDiv.textContent = name.concat("-",genre);
      var imgDiv = document.createElement("IMG");
      imgDiv.className = "tile";
      imgDiv.setAttribute('src',pic);
      var closeBtn = document.createElement("a");
      closeBtn.textContent = "x";
      closeBtn.id = i.toString();
      closeBtn.addEventListener('click',deleteFromHistory);
      textDiv.appendChild(closeBtn);
      wrap.appendChild(textDiv);
      wrap.appendChild(imgDiv);
      document.getElementById('bucketlistDisplay').appendChild(wrap);
    }
  }


  render(){
    return <div id='main' className = "bucket">
              
                <h1> Bucket List </h1>
      <div id = 'bucketlistDisplay'></div>
		</div>;
  }



}
