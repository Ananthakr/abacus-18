import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC90aMVW0OGhUKFIjlA1VM2xMkPJvOp7SM",
    authDomain: "abacus-18.firebaseapp.com",
    databaseURL: "https://abacus-18.firebaseio.com",
    projectId: "abacus-18",
    storageBucket: "abacus-18.appspot.com",
    messagingSenderId: "51357261044"
};

const Firebase =  firebase.initializeApp(config);

export default Firebase;
