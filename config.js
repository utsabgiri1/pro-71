import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 

  apiKey: "AIzaSyAMoBIgYkkxCgrb-QXC0osOSXH9evhOFkU",
  authDomain: "p-71-d202a.firebaseapp.com",
  projectId: "p-71-d202a",
  storageBucket: "p-71-d202a.appspot.com",
  messagingSenderId: "805798466125",
  appId: "1:805798466125:web:30c9254fc98d1f9871c204"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

