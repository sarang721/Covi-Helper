import firebase from '@firebase/app';
import "firebase/firestore";
import {useHistory} from 'react-router-dom';
require('firebase/auth');


const firebaseConfig = {
    apiKey: "AIzaSyARL8zcHPm_jTwi5ZcNT14MHCu_w75jyaQ",
    authDomain: "covid-19-927c2.firebaseapp.com",
    projectId: "covid-19-927c2",
    storageBucket: "covid-19-927c2.appspot.com",
    messagingSenderId: "261624478123",
    appId: "1:261624478123:web:d6b4d44e53ad697a217aee",
    measurementId: "G-G47D3K7C1F"
};

firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db=firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export {auth,registerWithEmailAndPassword,signInWithEmailAndPassword,db,googleProvider,firebase};

