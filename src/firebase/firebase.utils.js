import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQVBWkq8KvuEHYDl79O67RWd2rWsA0HcQ",
    authDomain: "crown-db-d6693.firebaseapp.com",
    databaseURL: "https://crown-db-d6693.firebaseio.com",
    projectId: "crown-db-d6693",
    storageBucket: "",
    messagingSenderId: "427627688547",
    appId: "1:427627688547:web:62770bb6a82cd1d2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creating user: ', error.message);
      }

      
    }
    return userRef; 


  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;