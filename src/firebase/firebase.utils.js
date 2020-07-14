import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'jh-clothing-store-db.firebaseapp.com',
  databaseURL: 'https://jh-clothing-store-db.firebaseio.com',
  projectId: 'jh-clothing-store-db',
  storageBucket: 'jh-clothing-store-db.appspot.com',
  messagingSenderId: '579670343528',
  appId: '1:579670343528:web:5826b9b917ae504756a0dd',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
