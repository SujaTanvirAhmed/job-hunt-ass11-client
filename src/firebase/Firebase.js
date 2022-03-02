import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD0i_fJM1Vc37n_S1CF4gM6GwiLlK9H_W4",
    authDomain: "job-hunt-ass11.firebaseapp.com",
    projectId: "job-hunt-ass11",
    storageBucket: "job-hunt-ass11.appspot.com",
    messagingSenderId: "342956881483",
    appId: "1:342956881483:web:3f51fde9df12ac223b7fce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);