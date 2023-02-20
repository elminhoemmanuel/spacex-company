import React, { useState } from "react";
import { UserData } from "../../interfaces/auth";
import AuthContext from "./AuthContext";

type AuthProviderProps = {
    children: React.ReactNode
}

const dummyUserData: UserData = { email: "junior@moneeyapp.com", password: "Moneeyapp4u." }

const AuthProvider = ({ children }: AuthProviderProps) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (email: string, password:string):string =>{
        if( email === dummyUserData.email && password === dummyUserData.password ){
            setIsLoggedIn(true);
            return "loggedIn"
        }
        return ""
    }

    const logout = ()=> setIsLoggedIn(false);

    const AuthContextValue = { login, logout, isLoggedIn }

    return (
        <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider