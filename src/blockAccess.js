import React, { useEffect } from 'react';
// import Hub
import Amplify, { Auth, Hub } from 'aws-amplify';

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

if (checkUser() == 'not authenticated') {
	window.location.replace("https://master.d1artn8nksk20o.amplifyapp.com/index.html");
}
