import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUGHElOa08Yd3MYMR-CNdm-YPKuqrH5dY",
  authDomain: "didi-ai-nepal.firebaseapp.com",
  projectId: "didi-ai-nepal",
  storageBucket: "didi-ai-nepal.appspot.com", // Fixed the incorrect URL for storage
  messagingSenderId: "108434870492",
  appId: "1:108434870492:web:9f0015cd85baf929f0e419",
  measurementId: "G-X77W4G9YW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup,signInWithEmailAndPassword  };