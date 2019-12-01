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
export default class RecommendFood extends React.Component{ 
  componentDidMount(){
    var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        API_Request(`latitude=${crd.latitude}&longitude=${crd.longitude}`);

    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        API_Request('location="Los Angeles, CA"')
    }
    navigator.geolocation.getCurrentPosition(success, error, options);

    function API_Request(loc){
      var NUM_RECS = 4;
      var request = new XMLHttpRequest()
      var query = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'.concat(loc);

      request.open('GET', query, true)
      request.setRequestHeader('Authorization', 'Bearer GOwKiYf6YgplxeQAJWLN6kZ6oF56Su8hiZ9yv1fk4Zw6D-xFG0GGteQiwPWBw0Wa7glsFlfSyydsFSegpPSF3rb4dm0xe6IqKn0jrKHnsKAbQCWJvc0cjfArvQKlXXYx')
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
  
        if (request.status >= 200 && request.status < 400) {
            var recNum = new Array(NUM_RECS);
            var i =0;
            while(i<NUM_RECS){
                var temp= Math.floor(Math.random()*data.businesses.length);
                if(!recNum.includes(temp)){
                    recNum[i]=temp;
                    i = i+1;
                }
  
            }
            document.getElementById("rec1").setAttribute('src',data.businesses[recNum[0]].image_url)
            document.getElementById("rec2").setAttribute('src',data.businesses[recNum[1]].image_url)
            document.getElementById('rec3').setAttribute('src',data.businesses[recNum[2]].image_url)
            document.getElementById('rec4').setAttribute('src',data.businesses[recNum[3]].image_url)
            document.getElementById("r1name").textContent = data.businesses[recNum[0]].name;
            document.getElementById("r2name").textContent = data.businesses[recNum[1]].name;
            document.getElementById('r3name').textContent = data.businesses[recNum[2]].name;
            document.getElementById('r4name').textContent = data.businesses[recNum[3]].name;
          /*data.forEach(movie => {
            console.log(movie.title)
          })*/
        } else {
          console.log('error')
        }
      }    
      request.send()
    }
  }
  async searchFood(){
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    var data = null;
    var userFoodListArray = [];
    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    function getFoodList() {
      console.log("calling getfood");
      userFoodListArray = []; //wipe array of old page data
      //List own user's bucketlist by using getUser
      API.graphql(graphqlOperation(getUser, {username: currentUser})).then((evt) => {
        if(evt.data.getUser.foodhistory!=null){
          console.log("listNotNull");
        evt.data.getUser.foodhistory.map((Food,i) => {
          console.log(Food);
          userFoodListArray.push(Food);
        });}
      })
      return 1;
    }
    async function addToFoodHistory(){
      console.log("adding to Food History");
      var dataIndex = parseInt(this.id,10);
      var dum = await getFoodList();
      await sleep(1000);
      console.log(userFoodListArray);
      var term = data.businesses[dataIndex].categories[0].title;
      console.log(term);
      var duplicateTerms = 0;
      console.log(userFoodListArray.length);
      for(var i = 0; i < userFoodListArray.length; i++)
        if(term == userFoodListArray[i]){
          console.log("duplicate");
          duplicateTerms=i;
        }

      if(duplicateTerms == 0)
        userFoodListArray.push(term);
      else
        userFoodListArray.splice(duplicateTerms,1);
      console.log(userFoodListArray);
      API.graphql(graphqlOperation(updateUser, {input:{username: currentUser, foodhistory: userFoodListArray}}));

    }
    function addToBucketList(){
      console.log("adding To Bucket List")
      var dataIndex = parseInt(this.id,10);
      console.log(dataIndex);
      console.log(data.businesses[dataIndex].name);
    }
    const myNode = document.getElementById("searchResults");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var term = 'term='.concat('\"',document.getElementById("searchInput").value,'\"');
    var request = new XMLHttpRequest()
    var query = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'.concat(term,'&location="Los Angeles, CA');

    request.open('GET', query, true)
    request.setRequestHeader('Authorization', 'Bearer GOwKiYf6YgplxeQAJWLN6kZ6oF56Su8hiZ9yv1fk4Zw6D-xFG0GGteQiwPWBw0Wa7glsFlfSyydsFSegpPSF3rb4dm0xe6IqKn0jrKHnsKAbQCWJvc0cjfArvQKlXXYx')
    request.onload = function() {
      // Begin accessing JSON data here
      data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
          console.log(data.total);
          console.log(data.businesses.length);
          //create divs for search results
          for(let i = 0; i< data.businesses.length;i++){
            //create the containing div for each result
            var newDiv = document.createElement("div");
            newDiv.style.cssText = "width:50%; height:300px; position:relative;float:left;background-image: url('https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/wooden.jpg');background-size: cover;background-repeat:repeat;"
            
            //image for the result
            var newImg = document.createElement("IMG");
            newImg.src=data.businesses[i].image_url;
            newImg.className = "searchImage";
            newDiv.appendChild(newImg);
            
            //span to hold the restaurant name and address in the same line as the image
            var newSpan = document.createElement("span");
            var restName = document.createElement("p");
            restName.textContent = data.businesses[i].name;
            newSpan.appendChild(restName);

            //restaurant address
            var address1 = document.createElement("p");
            address1.textContent=data.businesses[i].location.address1;
            var address2 = document.createElement("p");
            address2.textContent=data.businesses[i].location.address2;
            newSpan.appendChild(address1);
            //newSpan.appendChild(address2);
            newDiv.appendChild(newSpan);

            //button to add to bucketList
            var bucketButton = document.createElement("BUTTON");
            bucketButton.id = i.toString();
            bucketButton.addEventListener("click",addToBucketList);
            bucketButton.textContent = "Bucket";

            //button to add element to food history
            var histButton = document.createElement("BUTTON");
            histButton.id = i.toString();
            histButton.addEventListener("click",addToFoodHistory);
            histButton.textContent = "History";

            newDiv.appendChild(bucketButton);
            newDiv.appendChild(histButton);

            document.getElementById("searchResults").appendChild(newDiv);
          }    
      }
      else{
        console.log("error");
      }   
    }
    request.send()
  }
	render(){
        const h1Style ={
            fontFamily: 'Garamond', 
            fontSize: '20pt'
        }
		return (
        <div id = "main">
          <div id = "recommend" className="app">
            <div id = "login-page" className="app-header">
                <h1>Explore Food</h1>                           
              <div id = "RecommendFood">
                  <h1 style = {h1Style}>Our Suggestions</h1>
                        <div id = "recommendPartition">
                            <div className="wrapper"><div className="text" id = "r1name"></div><img id = "rec1" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r2name"></div><img id = "rec2" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r3name"></div><img id = "rec3" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r4name"></div><img id = "rec4" className = "tile"></img></div>
                        </div>
                        <div id = "CuisineSearch">
                        <h1 style = {h1Style}>Cuisine Search</h1>
                        <input type="text" id="searchInput" placeholder="Search..."/> 
                        <span onClick={() => this.searchFood()} className="addBtn">Search</span>
                        <div id = "searchResults"></div> 
                        </div>
              </div>
            </div>
          </div>
        </div>
		);
	}
}