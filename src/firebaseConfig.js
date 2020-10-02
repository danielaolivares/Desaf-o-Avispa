import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0PUj4XkZyLpNuKhR0CVz4WHYfmfVFasc",
    authDomain: "avispa-2b5ed.firebaseapp.com",
    databaseURL: "https://avispa-2b5ed.firebaseio.com",
    projectId: "avispa-2b5ed",
    storageBucket: "avispa-2b5ed.appspot.com",
    messagingSenderId: "949166085197",
    appId: "1:949166085197:web:6fbd94f05fdd173326b804",
    measurementId: "G-YDYZ44HZLB"
  };

  firebase.initializeApp(firebaseConfig);
  export{firebaseConfig}