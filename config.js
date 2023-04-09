import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyB0quTRmLkCTK-f_f03m41YfZrSfPwjKNo",
  authDomain: "tirunelveli-police.firebaseapp.com",
  databaseURL: "https://tirunelveli-police-default-rtdb.firebaseio.com",
  projectId: "tirunelveli-police",
  storageBucket: "tirunelveli-police.appspot.com",
  messagingSenderId: "867845699678",
  appId: "1:867845699678:web:72830d717ea143ae935ccf",
  measurementId: "G-TBQE8XVN2K"
};
if(firebase.apps.length==0){
    firebase.initializeApp(firebaseConfig);
}

const db =getDatabase();
export{db}