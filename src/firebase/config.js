import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2wb2aFk3o6l-BcAtBEnCopWArdCwnB0k',
  authDomain: 'rickandmorty-coderhouse.firebaseapp.com',
  projectId: 'rickandmorty-coderhouse',
  storageBucket: 'rickandmorty-coderhouse.appspot.com',
  messagingSenderId: '542169037300',
  appId: '1:542169037300:web:f317aa2ca10ed87849e1a1',
};

const app = firebase.initializeApp(firebaseConfig);

export const getAuth = () => {
  return firebase.auth(app);
};

export const provider = new firebase.auth.GoogleAuthProvider();
