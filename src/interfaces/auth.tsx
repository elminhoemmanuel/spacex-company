export type AuthContextType = {
    login: (email: string, password:string)=>string;
    logout: ()=>void;
}

export type UserData = {
    email: string;
    password: string;
}