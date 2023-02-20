import React, { useContext, useEffect } from "react";
import { LayoutProps } from "../../../interfaces/layout";
import Logo from "../../common/Logo";
import styles from "./dashboardLayout.module.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import { AuthContextType } from "../../../interfaces/auth";
import { getFromLocalStorage } from "../../../utils/localStorage";


const DashboardLayout = ({ children }: LayoutProps) => {

    const { logout } = useContext(AuthContext) as AuthContextType
    const navigate = useNavigate();
    const logoutInterval = 120

    useEffect(() => {
        const isLoggedIn = getFromLocalStorage("isAuthenticated")
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [navigate])

    useEffect(() => {
        const interval = setInterval(() => {
            logout();
            navigate("/")
        }, (logoutInterval * 1000))

        return () => clearInterval(interval);
    }, [logout, navigate])

    return (
        <div>
            <div className={styles.nav}><div className={styles.logo}><Logo /></div></div>
            <div className={styles.holder}>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout