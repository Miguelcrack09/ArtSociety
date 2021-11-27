// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyAnVJCl-hx2Mn22YjP806Jop8HHM5sLNEU",
    authDomain: "artsociety-8b2b9.firebaseapp.com",
    projectId: "artsociety-8b2b9",
    storageBucket: "artsociety-8b2b9.appspot.com",
    messagingSenderId: "240471911455",
    appId: "1:240471911455:web:98798528d91945151e392a",
    measurementId: "G-2LZHNGFMZM"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/homeusers',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult) => {
        const obj = {
            "DNI": authResult.user.uid,
            "Name": authResult.user.displayName,
            "Photo": authResult.user.photoURL 
        }
        localStorage.setItem('data', JSON.stringify(obj));

        return true;
    },
  },
};

function ButtonLogin() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default ButtonLogin
