import * as firebase from 'firebase'
import 'firebase/firestore';

const config = {
  firebaseConfig = {
    apiKey: "AIzaSyAIwnYWb5q3mGebTU7G0u_pe_cCFoay50I",
    authDomain: "button-30a4e.firebaseapp.com",
    databaseURL: "https://button-30a4e.firebaseio.com",
    projectId: "button-30a4e",
    storageBucket: "button-30a4e.appspot.com",
    messagingSenderId: "515365477241",
    appId: "1:515365477241:web:050d67f507a5950fcd2da8"
  },
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
