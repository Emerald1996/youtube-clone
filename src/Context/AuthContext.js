import React, { useContext , createContext, useState, useEffect  } from "react"
import { GoogleAuthProvider , signInWithRedirect,  onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user , setUser] = useState({})

    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth , provider)
    }

   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       console.log('User', currentUser)
     });
     return () => {
       unsubscribe();
     };
   },[])
    return (
        <AuthContext.Provider value={{googleSignIn , user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}
