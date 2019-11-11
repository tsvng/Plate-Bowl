import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations'

//import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

const LoginButton = document.getElementById('LoginButton');
const SignupButton = document.getElementById('SignupButton');

if (LoginButton) {
  LoginButton.addEventListener('click', (event) => {
    //Auth.federatedSignIn();
    console.log("clicked login button");
  });
}

if (SignupButton) {
  SignupButton.addEventListener('click', (event) => {
    //Auth.federatedSignIn();
    console.log("clicked signup button");
  });
};

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  return await API.graphql(graphqlOperation(createTodo, { input: todo }))
}



