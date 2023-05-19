import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Creating user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)  =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user,{
            displayName: name,
            photoURL: photo
            
        })
        .then(()=>{
            console.log('user name updated');
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth, loggedUser =>{
              console.log('logged in user inside auth state', loggedUser);
              setUser(loggedUser);
              setLoading(false)
          })
          return () =>{
              unsubscribe();
          }
      },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserData,
        logOut

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;