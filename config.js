import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyAlT2b7bAWIAe9hpYscn42aGpe5c1WBXBU",
  authDomain: "wireless-library-4ef0d.firebaseapp.com",
  databaseURL: "https://wireless-library-4ef0d.firebaseio.com",
  projectId: "wireless-library-4ef0d",
  storageBucket: "wireless-library-4ef0d.appspot.com",
  messagingSenderId: "17862405327",
  appId: "1:17862405327:web:de08b4618620ae18ae9bba"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()