import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('UH9nMwkphIriEcZ2Ygci')
  .collection('cartItems')
  .doc('miWglOyVx9VEjlWOFZE2');
firestore.doc('/users/UH9nMwkphIriEcZ2Ygci/cartItems/miWglOyVx9VEjlWOFZE2');
firestore.collection('/users/UH9nMwkphIriEcZ2Ygci/cartItems');
