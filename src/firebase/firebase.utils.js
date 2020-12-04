import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCL1rBIpiTBihv7s1tspPzchooHSZUI25c",
  authDomain: "crwn-db-31150.firebaseapp.com",
  projectId: "crwn-db-31150",
  storageBucket: "crwn-db-31150.appspot.com",
  messagingSenderId: "161737865641",
  appId: "1:161737865641:web:7a26bd5ee1b8fe6e17ecb8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;