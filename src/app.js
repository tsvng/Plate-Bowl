import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations'
import Auth from '@aws-amplify/auth';

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);


Auth.configure({
    mandatorySignIn: true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_uLqyIsqnt',
    userPoolWebClientId: '224uf0oqjqib1oac70r3jd24g3'
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



