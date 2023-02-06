import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// import firebase from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyDihaHBna5euKOrUilovxqQCTJx53ORlO0",
    authDomain: "hotstar-clone-2b2c7.firebaseapp.com",
    projectId: "hotstar-clone-2b2c7",
    storageBucket: "hotstar-clone-2b2c7.appspot.com",
    messagingSenderId: "1005313152612",
    appId: "1:1005313152612:web:09ec0661bc73e084eeb171",
    measurementId: "G-X31H3KQ8C6"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;