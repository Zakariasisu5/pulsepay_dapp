import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx89mhPNRmKbUNHdu60W6LNbhr1IZTEd8",
  authDomain: "pulsepay-5c7fe.firebaseapp.com",
  projectId: "pulsepay-5c7fe",
  storageBucket: "pulsepay-5c7fe.firebasestorage.app",
  messagingSenderId: "806601337183",
  appId: "1:806601337183:web:636ae0c6d2d6b8374b2eea",
  measurementId: "G-HJTJTM3GT7"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//👉 Go to Firebase Console, create a project, enable Email/Password Auth, and copy your config.