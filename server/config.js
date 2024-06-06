import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAHMF_FoOYcWIu60l5jVFV3nQQxEHQiBSA",
  authDomain: "myuni-71525.firebaseapp.com",
  projectId: "myuni-71525",
  storageBucket: "myuni-71525.appspot.com",
  messagingSenderId: "305110844543",
  appId: "1:305110844543:web:ec98f3371053ce9dd8ab4a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default { firebaseConfig, auth, db };