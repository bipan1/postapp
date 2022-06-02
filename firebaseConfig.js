import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnajMB4PRysM89z91OY__UZEGnq9avm20",
    authDomain: "bipandemo-4f086.firebaseapp.com",
    projectId: "bipandemo-4f086",
    storageBucket: "bipandemo-4f086.appspot.com",
    messagingSenderId: "296688336445",
    appId: "1:296688336445:web:0a51625386727434bd3454",
    measurementId: "G-ET0GVT7P8D"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
