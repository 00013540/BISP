import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBew-4jxGCWGo5B90cArulsbK8qBV6cZQQ',
  authDomain: 'bisp-1f0c4.firebaseapp.com',
  projectId: 'bisp-1f0c4',
  storageBucket: 'bisp-1f0c4.firebasestorage.app',
  messagingSenderId: '815058857973',
  appId: '1:815058857973:web:9145db6c8d0980c2e63abc',
  measurementId: 'G-TG7GTHPP8T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
