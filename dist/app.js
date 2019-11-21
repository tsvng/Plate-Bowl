// src/App.js

// import useEffect hook
import React, { useEffect } from 'react';
// import Hub
import Amplify, { Auth, Hub } from 'aws-amplify';
import Home from './Home.js';
import NavBar from './NavBar.js';
import LeaderBoard from './Leaderboard.js';
import BucketList from './BucketList.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_uLqyIsqnt',
    userPoolWebClientId: '224uf0oqjqib1oac70r3jd24g3',
    mandatorySignIn: true,
    oauth: {
      domain: 'platenbowl.auth.us-east-1.amazoncognito.com',
      scope: ['phone','email','profile','openid','aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://master.d1artn8nksk20o.amplifyapp.com/home.html',
      redirectSignOut: 'https://master.d1artn8nksk20o.amplifyapp.com/index.html',
      responseType: 'token'
    }
  }
  });

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function App(props) {
  // in useEffect, we create the listener
  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has happened: ', data)
       if (payload.event === 'signIn') {
         console.log('a user has signed in!')
       }
       if (payload.event === 'signOut') {
         console.log('a user has signed out!')
       }
    })
  }, [])
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/RecommendFood">RecommendFood</Link>
          </li>
          <li>
            <Link to="/LeaderBoard">LeaderBoard</Link>
          </li>
          <li>
            <Link to="/FoodHistory">FoodHistory</Link>
          </li>
          <li>
            <Link to="/BucketList">BucketList</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <NavBar />
            <Home />
          </Route>
          <Route path="/RecommendFood">
            <NavBar />
            <RecommendFood />
          </Route>
          <Route path="/LeaderBoard">
            <NavBar />
            <LeaderBoard />
          </Route>
          <Route path="/FoodHistory">
            <NavBar />
            <FoodHistory />
          </Route>
          <Route path="/BucketList">
            <NavBar />
            <BucketList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const imgStyle = {width: '200px'};

function Login() {
  return <div className="app">
        <div className="app-header">
          <div className="app-logo">
            <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={imgStyle} />
          </div>
          <h1>Welcome to Plate&Bowl</h1>
        </div>
        <div className="App">
          <header className="App-header">
            <button id="SignInButton" onClick={() => Auth.federatedSignIn()}>Sign In</button>
        </header>
      </div>    
    </div>;
}

function RecommendFood() {
  return <h2>RecommendFood</h2>;
}

function FoodHistory() {
  return <h2>FoodHistory</h2>;
}


export default App
