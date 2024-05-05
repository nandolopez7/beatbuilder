import  firebase  from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyCJ64XOR1tQ4tbAIZFQ_MvfzLD2FvbeOjA",
  authDomain: "beat-builder.firebaseapp.com",
  projectId: "beat-builder",
  storageBucket: "beat-builder.appspot.com",
  messagingSenderId: "518783789245",
  appId: "1:518783789245:web:e758e6a5d1f072c551afd4"
});

// Obtén una instancia de Firestore
const db = firebase.firestore();

export { db };

// Initialize Fireba
