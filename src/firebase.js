import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWkFG5GCsERquhlCeh_KoCSUm3x2Eulgo",
    authDomain: "facebook-messenger-clone-9dff0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-9dff0.firebaseio.com",
    projectId: "facebook-messenger-clone-9dff0",
    storageBucket: "facebook-messenger-clone-9dff0.appspot.com",
    messagingSenderId: "282189142228",
    appId: "1:282189142228:web:a1407fc1b67316022dc341"
});

const db = firebaseApp.firestore();

export default db;