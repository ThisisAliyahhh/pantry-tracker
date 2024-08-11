import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBRBUVs0QboizWDlPU0EgsneJstNf5EV3I",
  authDomain: "pantry-tracker-d1af6.firebaseapp.com",
  projectId: "pantry-tracker-d1af6",
  storageBucket: "pantry-tracker-d1af6.appspot.com",
  messagingSenderId: "394688384094",
  appId: "1:394688384094:web:b57a2a1fbe72ad0dc838cf"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };