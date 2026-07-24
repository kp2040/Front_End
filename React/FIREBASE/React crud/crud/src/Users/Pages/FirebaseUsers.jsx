import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDcmmBoyFyFrmyonEgalZmwB-hBf2yhX0I",
    authDomain: "Users-8dc5d.firebaseapp.com",
    projectId: "Users-8dc5d",
    storageBucket: "Users-8dc5d.firebasestorage.app",
    messagingSenderId: "843816117395",
    appId: "1:843816117395:web:88baa4e2855703940b1966",
    measurementId: "G-839N0CZGCJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = app.firestore(app);
    