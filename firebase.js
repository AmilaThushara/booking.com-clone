
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

  
const firebaseConfig = {
  apiKey: "AIzaSyBuHnbXDxLRJU0oWfZkEdnZuWWTe2jIkHQ",
  authDomain: "booking-project-483c9.firebaseapp.com",
  projectId: "booking-project-483c9",
  storageBucket: "booking-project-483c9.appspot.com",
  messagingSenderId: "293137637660",
  appId: "1:293137637660:web:0e03c6b48a023426e5dad9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};