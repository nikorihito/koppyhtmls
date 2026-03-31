// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxrCemlTu34n4hcE7inZI5YFtCIDGQR_k",
  authDomain: "mamokids-ad530.firebaseapp.com",
  projectId: "mamokids-ad530",
  storageBucket: "mamokids-ad530.firebasestorage.app",
  messagingSenderId: "521123153861",
  appId: "1:521123153861:web:7c0a15a345c7ac03fc6dac",
  measurementId: "G-0YS6D7BSEB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
