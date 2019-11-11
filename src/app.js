import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations'
import Auth from '@aws-amplify/auth';

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);


Auth.configure({
    identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
    mandatorySignIn: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_CLIENT_ID,

    cookieStorage: {
      domain: process.env.AWS_COOKIE_DOMAIN
    }
});

const LoginButton = document.getElementById('LoginButton');
const SignupButton = document.getElementById('SignupButton');

if (LoginButton) {
  LoginButton.addEventListener('click', (event) => {
    Auth.federatedSignIn();
    console.log("clicked login button");
  });
}

if (SignupButton) {
  SignupButton.addEventListener('click', (event) => {
    Auth.federatedSignIn();
    console.log("clicked signup button");
  });
};

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  return await API.graphql(graphqlOperation(createTodo, { input: todo }))
}



