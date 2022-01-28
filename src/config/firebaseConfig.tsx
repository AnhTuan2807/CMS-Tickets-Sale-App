import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import "firebase/firestore/";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkcOSYAXJBlurBshX4eN-goRoe4l_l16c",
  authDomain: "cms-tickets-sale-app.firebaseapp.com",
  projectId: "cms-tickets-sale-app",
  storageBucket: "cms-tickets-sale-app.appspot.com",
  messagingSenderId: "878221960372",
  appId: "1:878221960372:web:6a7c7e6506f8f73aaf23e1"
};

  
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase

