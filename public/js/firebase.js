<<<<<<< HEAD

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
=======
"use strict";
// src/firebase.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.db = exports.auth = void 0;
// Import core Firebase App initialization function and its type
const app_1 = require("firebase/app");
// Import Firebase Authentication functions and its type
const auth_1 = require("firebase/auth");
// Import Cloud Firestore functions and its type
const firestore_1 = require("firebase/firestore");
// Your Firebase project configuration
// This object connects your web app to your specific Firebase project
>>>>>>> 95db2329452f91d13454c8e50f2b81b3d15ed034
const firebaseConfig = {
    apiKey: "AIzaSyA4tgSTXHNhr5rcT19nm7lvm_34W31Svcw",
    authDomain: "academy-79749.firebaseapp.com",
    projectId: "academy-79749",
    storageBucket: "academy-79749.appspot.com",
    messagingSenderId: "84837784904", 
    appId: "1:84837784904:web:632da212f3f720e1f7a77d", 
    measurementId: "G-514215003" 
};
<<<<<<< HEAD

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };
=======
// Initialize the Firebase app with your configuration
// This is the core application instance that other Firebase services will use
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
// Initialize Firebase Authentication
// This creates an Auth instance tied to your Firebase app
exports.auth = (0, auth_1.getAuth)(app);
// Initialize Cloud Firestore
// This creates a Firestore instance tied to your Firebase app
exports.db = (0, firestore_1.getFirestore)(app);
// >>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<
// You can add other Firebase services here if you initialize them.
// Example for Cloud Storage:
// import { getStorage, FirebaseStorage } from 'firebase/storage';
// export const storage: FirebaseStorage = getStorage(app);
//# sourceMappingURL=firebase.js.map
>>>>>>> 95db2329452f91d13454c8e50f2b81b3d15ed034
