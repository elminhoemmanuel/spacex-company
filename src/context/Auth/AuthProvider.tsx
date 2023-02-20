import React from "react";
import { UserData } from "../../interfaces/auth";
import { removeFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";
import AuthContext from "./AuthContext";

type AuthProviderProps = {
    children: React.ReactNode
}

const dummyUserData: UserData = { email: "junior@moneeyapp.com", password: "Moneeyapp4u." }

const AuthProvider = ({ children }: AuthProviderProps) => {

    const login = (email: string, password:string):string =>{
        if( email === dummyUserData.email && password === dummyUserData.password ){
            setToLocalStorage("isAuthenticated", email)
            return "loggedIn"
        }
        return ""
    }

    const logout = ()=> removeFromLocalStorage("isAuthenticated");

    const AuthContextValue = { login, logout }

    return (
        <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider