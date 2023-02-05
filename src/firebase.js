// import firebase from "firebase";
import firebase from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyDihaHBna5euKOrUilovxqQCTJx53ORlO0",
    authDomain: "hotstar-clone-2b2c7.firebaseapp.com",
    projectId: "hotstar-clone-2b2c7",
    storageBucket: "hotstar-clone-2b2c7.appspot.com",
    messagingSenderId: "1005313152612",
    appId: "1:1005313152612:web:09ec0661bc73e084eeb171",
    measurementId: "G-X31H3KQ8C6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;