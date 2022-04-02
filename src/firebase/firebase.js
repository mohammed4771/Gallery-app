import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUChSC6xxmtATQpNanOSInI6zmqZtsgTo",
    authDomain: "fireg-392da.firebaseapp.com",
    projectId: "fireg-392da",
    storageBucket: "fireg-392da.appspot.com",
    messagingSenderId: "65039601230",
    appId: "1:65039601230:web:4d9460d139238444e23d1f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };