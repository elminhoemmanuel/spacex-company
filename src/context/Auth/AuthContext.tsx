import { createContext } from "react";
import { AuthContextType } from "../../interfaces/auth";

export default createContext<AuthContextType | {}>({});