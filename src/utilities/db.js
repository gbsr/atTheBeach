import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyDPP2anqpTwkwpORI3FOoI2qGpBxz4Tsww",
	authDomain: "at-the-beach-2697c.firebaseapp.com",
	projectId: "at-the-beach-2697c",
	storageBucket: "at-the-beach-2697c.appspot.com",
	messagingSenderId: "489618262303",
	appId: "1:489618262303:web:40f6cc3dbd1aab9496c82a",
	measurementId: "G-VJFDLFN9Z4"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };