import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoWa8IZlNuunsxJL6-BcIIpom0rf377GI",
  authDomain: "mymoney-b11cd.firebaseapp.com",
  projectId: "mymoney-b11cd",
  storageBucket: "mymoney-b11cd.appspot.com",
  messagingSenderId: "916505174384",
  appId: "1:916505174384:web:eea93f8c7227daa243efb5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }