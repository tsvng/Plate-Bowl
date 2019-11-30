// src/App.js

// import useEffect hook
import React, { useEffect } from 'react';
// import Hub
import Amplify, { Auth, Hub } from 'aws-amplify';
import Home from './Home.js';
import NavBar from './NavBar.js';
import LeaderBoard from './Leaderboard.js';
import BucketList from './BucketList.js';
import RecommendFood from './RecommendFood.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

async function checkUser() {
  return (await Auth.currentAuthenticatedUser());
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {user: null};
    
    Hub.listen('auth', (data) => {
        const { payload } = data;
        this.onAuthEvent(payload);
        console.log('A new auth event has happened: ', data);
      })
  }
  
  onAuthEvent(payload) {
    if (payload.event === 'signIn') {
      console.log('a user has signed in!')
    }
    if (payload.event === 'signOut') {
      console.log('a user has signed out!')
    }
  }
  
  async componentDidMount() {
      const res = await checkUser();
      console.log("User is " + JSON.stringify(res));
      this.setState({user: res});
  }
  
  render() {
    /*if (this.state.user != null) {
     return (
       <div>
          <Login/>
       </div>
     );
    } else {*/
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
                <Link to="/recommendfood">RecommendFood</Link>
              </li>
              <li>
                <Link to="/leaderboard">LeaderBoard</Link>
              </li>
              <li>
                <Link to="/foodhistory">FoodHistory</Link>
              </li>
              <li>
                <Link to="/bucketlist">BucketList</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/home">
                <NavBar />
                <Home />
              </Route>
              <Route path="/recommendfood">
                <NavBar />
                <RecommendFood />
              </Route>
              <Route path="/leaderboard">
                <NavBar />
                <LeaderBoard />
              </Route>
              <Route path="/foodhistory">
                <NavBar />
                <FoodHistory />
              </Route>
              <Route path="/bucketlist">
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
    //}
  }
}

const imgStyle = {width: '400px'};

function Login() {
  return <div id="login-page" className="app">
        <div id="login-page" className="app-header">
        <div className = "container">
          <div className="app-logo">
            <img src="https://amplify-platenbowl-test-154226-deployment.s3.amazonaws.com/assets/PBLogo.png" style={imgStyle} />
            <p>Get recommendations. Find new favorites.</p>
        </div>
        <div className="App">
          <header className="App-header">
            <button id="SignInButton" onClick={() => Auth.federatedSignIn()}>Sign In</button>
        </header>
        </div>
      </div>
      </div>    
    </div>;
}

function FoodHistory() {
  return <h2>FoodHistory</h2>;
}


export default App
