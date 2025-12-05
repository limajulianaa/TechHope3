"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.db = exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyA4tgSTXHNhr5rcT19nm7lvm_34W31Svcw",
    authDomain: "academy-79749.firebaseapp.com",
    projectId: "academy-79749",
    storageBucket: "academy-79749.appspot.com",
    messagingSenderId: "84837784904",
    appId: "1:84837784904:web:632da212f3f720e1f7a77d",
    measurementId: "G-514215003"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
//# sourceMappingURL=firebase.js.map