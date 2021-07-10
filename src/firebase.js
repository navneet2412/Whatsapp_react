// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSw_gryNsyiJe_pMvSTz8eXix7IWPhCak",
  authDomain: "whatsapp-mern-c42e4.firebaseapp.com",
  projectId: "whatsapp-mern-c42e4",
  storageBucket: "whatsapp-mern-c42e4.appspot.com",
  messagingSenderId: "736024411332",
  appId: "1:736024411332:web:b981116d755dbaa2809d91",
  measurementId: "G-BQ6BT6HF2M",
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;