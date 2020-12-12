import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCUcNi-FI3eZkuZ61Sd3PgqNZpNNROBoFI",
  authDomain: "portfolio-46e97.firebaseapp.com",
  databaseURL: "https://portfolio-46e97.firebaseio.com",
  projectId: "portfolio-46e97",
  storageBucket: "portfolio-46e97.appspot.com",
  messagingSenderId: "932168718239",
  appId: "1:932168718239:web:fe51007a6626a7afbdcfaa",
  measurementId: "G-D4LXYEEQCX"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;