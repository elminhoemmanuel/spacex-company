export type AuthContextType = {
    login: (email: string, password:string)=>void;
    logout: ()=>void;
    isLoggedIn: boolean;
}

export type UserData = {
    email: string;
    password: string;
}