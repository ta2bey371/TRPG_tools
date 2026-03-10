import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD3oPwLj_-DfGEA0kbpJ3Pl0-gn5t-5JI",
  authDomain: "trpg-tools-9875c.firebaseapp.com",
  projectId: "trpg-tools-9875c",
  storageBucket: "trpg-tools-9875c.firebasestorage.app",
  messagingSenderId: "583460299117",
  appId: "1:583460299117:web:8bd25bbe8a6651ef197a64"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};