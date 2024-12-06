
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCciHi_bUnHnNBb43jSpmwAUTB-vNM7wFM",
  authDomain: "netflix-clone-ff962.firebaseapp.com",
  projectId: "netflix-clone-ff962",
  storageBucket: "netflix-clone-ff962.firebasestorage.app",
  messagingSenderId: "482607322082",
  appId: "1:482607322082:web:b67d36a7f6cec1574d9fbb"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signUp=async (name,email,password)=>{
   try {
     const response= await createUserWithEmailAndPassword(auth,email,password);
     const user=response.user;
     await addDoc(collection(db,"users"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       
    
     });
   } catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "))
   }
}

const login=async(email,password)=>{
try {
    await signInWithEmailAndPassword(auth,email,password);
} catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "))
}
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signUp,logout};