"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
exports.subscribeToAuthChanges = subscribeToAuthChanges;
const firebase_js_1 = require("./firebase.js");
const firebase_js_2 = require("./firebase.js");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
exports.auth = (0, auth_1.getAuth)(firebase_js_1.app);
async function registerUser(email, password, displayName) {
    try {
        const userCredential = await (0, auth_1.createUserWithEmailAndPassword)(exports.auth, email, password);
        const user = userCredential.user;
        if (user) {
            await (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_js_2.db, "users", user.uid), {
                email: user.email,
                createdAt: new Date(),
            });
            console.log("User profile saved to Firestore for UID:", user.uid);
        }
        console.log("User registered:", user);
        return user;
    }
    catch (error) {
        console.error("Error registering user:", error.message);
        throw error;
    }
}
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
function subscribeToAuthChanges(callback) {
    const unsubscribe = (0, auth_1.onAuthStateChanged)(exports.auth, (user) => {
        callback(user);
    });
    return unsubscribe;
}
//# sourceMappingURL=authentication.js.map