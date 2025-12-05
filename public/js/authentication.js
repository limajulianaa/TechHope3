"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
exports.subscribeToAuthChanges = subscribeToAuthChanges;
// src/authentication.ts
const firebase_js_1 = require("./firebase.js"); // <-- ADICIONADO .js
const firebase_js_2 = require("./firebase.js"); // <-- ADICIONADO .js
// Import necessary Firebase Authentication functions for Email/Password
const auth_1 = require("firebase/auth");
// Import Firestore functions
const firestore_1 = require("firebase/firestore"); // <-- ADD THIS LINE: Import Firestore functions
// Get the Auth instance for your Firebase app
exports.auth = (0, auth_1.getAuth)(firebase_js_1.app);
// --- 1. User Registration (Email/Password) ---
// Now also accepts a displayName to save to Firestore
async function registerUser(email, password, displayName) {
    try {
        const userCredential = await (0, auth_1.createUserWithEmailAndPassword)(exports.auth, email, password);
        const user = userCredential.user;
        // <-- ADD THIS BLOCK: Save additional user info to Firestore -->
        if (user) {
            await (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_js_2.db, "users", user.uid), {
                displayName: displayName,
                email: user.email,
                createdAt: new Date(),
                // Add any other profile fields you need
            });
            console.log("User profile saved to Firestore for UID:", user.uid);
        }
        // <-- END ADDITION -->
        console.log("User registered:", user);
        return user;
    }
    catch (error) {
        console.error("Error registering user:", error.message);
        throw error;
    }
}
// --- 2. User Sign-in (Email/Password) ---
async function loginUser(email, password) {
    try {
        const userCredential = await (0, auth_1.signInWithEmailAndPassword)(exports.auth, email, password);
        console.log("User logged in:", userCredential.user);
        return userCredential.user;
    }
    catch (error) {
        console.error("Error logging in:", error.message);
        throw error;
    }
}
// --- 3. User Sign-out ---
async function logoutUser() {
    try {
        await (0, auth_1.signOut)(exports.auth);
        console.log("User logged out successfully.");
    }
    catch (error) {
        console.error("Error logging out:", error.message);
        throw error;
    }
}
// --- 4. Observe Auth State Changes (crucial for knowing if a user is logged in) ---
function subscribeToAuthChanges(callback) {
    const unsubscribe = (0, auth_1.onAuthStateChanged)(exports.auth, (user) => {
        callback(user);
    });
    return unsubscribe;
}
//# sourceMappingURL=authentication.js.map