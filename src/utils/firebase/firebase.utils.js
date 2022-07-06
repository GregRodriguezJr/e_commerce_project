import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD9wufhdwecymoPANOeiUl4MlGA8U2hwjg",
    authDomain: "crown-db-f42f6.firebaseapp.com",
    projectId: "crown-db-f42f6",
    storageBucket: "crown-db-f42f6.appspot.com",
    messagingSenderId: "907292527255",
    appId: "1:907292527255:web:d11d29b8a4f99e82fab7d2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);