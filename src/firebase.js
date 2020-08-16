import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYVAaoftGfSgggoQz7H-JAKfsExHuo8Bo",
    authDomain: "slack-clone-ccb88.firebaseapp.com",
    databaseURL: "https://slack-clone-ccb88.firebaseio.com",
    projectId: "slack-clone-ccb88",
    storageBucket: "slack-clone-ccb88.appspot.com",
    messagingSenderId: "847022194867",
    appId: "1:847022194867:web:a023f24e774746b5c330c6",
    measurementId: "G-HTP7R3T1MF"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;