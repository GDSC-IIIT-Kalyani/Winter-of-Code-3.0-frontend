import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDTrKTxgrKpeimmM8Wz3D563bA6-ooJP9o",
    authDomain: "winter-of-code-3.firebaseapp.com",
    projectId: "winter-of-code-3",
    storageBucket: "winter-of-code-3.appspot.com",
    messagingSenderId: "448428657404",
    appId: "1:448428657404:web:d02947edd99263d8bfa579",
    measurementId: "G-Y4GS2L0PYM"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signInWithGoogle = () => {
signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('profilePic', profilePic);
}).catch((error) => {
    console.log(error);
});
}