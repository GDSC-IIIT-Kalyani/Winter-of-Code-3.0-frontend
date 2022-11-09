import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    
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