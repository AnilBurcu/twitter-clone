// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA29bFl_byjjNzANHFVw04FqKPWIYrrxzg",
  authDomain: "twitter-clone-35b8d.firebaseapp.com",
  projectId: "twitter-clone-35b8d",
  storageBucket: "twitter-clone-35b8d.appspot.com",
  messagingSenderId: "688439307663",
  appId: "1:688439307663:web:d9c1d479fc2c5abb9e6ffa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);