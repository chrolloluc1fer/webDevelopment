import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react"
import { auth } from "../Firebase";



export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [mainLoader, setMainLoader] = useState(true)
    const [cUser, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setMainLoader(false);
        }, [])
    })
    let value = cUser;

    return (
        <AuthContext.Provider value={value}>
            {mainLoader == false && children}
        </AuthContext.Provider>
    )

}