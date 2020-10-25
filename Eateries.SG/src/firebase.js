import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBZ9TE9capqEPmzI5YE-jNVq3u6gf1JZ4I",
    authDomain: "eateries-79859.firebaseapp.com",
    databaseURL: "https://eateries-79859.firebaseio.com",
    projectId: "eateries-79859",
    storageBucket: "eateries-79859.appspot.com",
    messagingSenderId: "30273476364",
    appId: "1:30273476364:web:20e91a84d0d631655c1b29",
    measurementId: "G-7E22VRMVC3"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;