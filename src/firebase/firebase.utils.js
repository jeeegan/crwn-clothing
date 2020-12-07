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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
    } catch(err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;