import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCTgfLADMyH1L42R5vC074K5V5wK4aK8Qk",
  authDomain: "groceryproject-95696.firebaseapp.com",
  databaseURL: "https://groceryproject-95696.firebaseio.com",
  projectId: "groceryproject-95696",
  storageBucket: "groceryproject-95696.appspot.com",
  messagingSenderId: "41830137668",
  appId: "1:41830137668:web:3fa44918beaae13aa66111",
  measurementId: "G-19HVQN8BPW"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;