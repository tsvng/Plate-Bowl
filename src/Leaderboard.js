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
    const MutationButton = document.getElementById('MutationEventButton');
    const MutationResult = document.getElementById('MutationResult');
    var friendLeadersActive = true;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function sortTable() {
      console.log("sorted Ran");
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("LeaderBoardTable");
      console.log(table);
      switching = true;
      // Set the sorting direction to ascending:
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        console.log(rows);
      /* Loop through all table rows (except the
      first, which contains table headers): */
        // Start by saying there should be no switching:
        console.log(rows.length);
        var len = document.getElementById("LeaderBoardTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
        console.log(len);
        for (i = 0; i < 4; i++) {
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[1];
          y = rows[i + 1].getElementsByTagName("TD")[1];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          console.log(x.innerHTML);
          console.log(x);
          console.log(y.innerHTML)
          if (x.innerHTML < y.innerHTML) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }         
        if (shouldSwitch) {
          console.log("shouldSwitchHERE HI");
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1: 
        }
      }
    }

    const currentUser = (await Auth.currentAuthenticatedUser()).username;
    const QueryResult = document.getElementById('QueryResult');

    //This function displays the Friends Leaderboard
    async function getFriendLeaders() {
      MutationResult.innerHTML = `<h4>${currentUser}'s Friend Leaderboard</h4>`;
      QueryResult.innerHTML = ``;
      var leaderboardArray = [];

      //List own user's points at top by applying a filter to only query currentUser
      API.graphql(graphqlOperation(listUsers, {filter:{username:{eq:currentUser}}})).then((evt) => {
        evt.data.listUsers.items.map((user, i) => {
          QueryResult.innerHTML += `<tr><td>${user.username}</td><td>${user.points}</td></tr>`
        });
      })
      await sleep(250);
      //List friend's points by applying a filter that only lists users who have currentUser in their friends list
      API.graphql(graphqlOperation(listUsers, {filter:{friends:{contains:currentUser}}})).then((evt) => {
        evt.data.listUsers.items.map((user, i) => { 
          QueryResult.innerHTML += `<tr><td>${user.username}</td><td>${user.points}</td></tr>`
        });
      })
      sortTable();
    }

    //This function displays the Global Leaderboard
    async function getGlobalLeaders() {
      MutationResult.innerHTML = `<h4>Global Leaderboard</h4>`;
      QueryResult.innerHTML = ``;
      var leaderboardArray = [];

      //List own user's points at top by applying a filter to only query currentUser
      API.graphql(graphqlOperation(listUsers, {filter:{username:{eq:currentUser}}})).then((evt) => {
        evt.data.listUsers.items.map((user, i) => {
          leaderboardArray.push(user);
          QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
        });
      })
      await sleep(250);
      //List other user's points by applying a filter to only query users not equal to currentUser
      API.graphql(graphqlOperation(listUsers, {filter:{username:{ne:currentUser}}})).then((evt) => {
        evt.data.listUsers.items.map((user, i) => {
          leaderboardArray.push(user);
          QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
        });
      })

      JSON.stringify(leaderboardArray);
      console.log(leaderboardArray); //console returns the array
      console.log(leaderboardArray['1']); //console returns undefined???
      console.log(leaderboardArray.sort(function(a, b){return b.points - a.points})); //doesn't work, returns unsorted
    }

    getFriendLeaders();

    //controls which leaderboard is displayed
    MutationButton.addEventListener('click', (evt) => {
      friendLeadersActive = !friendLeadersActive;
      if(friendLeadersActive)
        getFriendLeaders();
      else
        getGlobalLeaders();
    });

  }

	 render() {
    return <div id='main' className = "leaderboard">
      <div className = "containerLeaderBoard">
          <button id='MutationEventButton'>Change Leaderboard</button>
          <div id='MutationResult'></div>
          <table id = "LeaderBoardTable"><tbody id='QueryResult'></tbody></table>
          </div>
        </div>

  }
}

