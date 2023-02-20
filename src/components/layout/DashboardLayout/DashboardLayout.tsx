import React, { useContext, useEffect } from "react";
import { LayoutProps } from "../../../interfaces/layout";
import Logo from "../../common/Logo";
import styles from "./dashboardLayout.module.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import { AuthContextType } from "../../../interfaces/auth";


const DashboardLayout = ({ children }: LayoutProps) => {

    const { isLoggedIn } = useContext(AuthContext) as AuthContextType
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    return (
        <>
            {
                isLoggedIn ? (
                    <div>
                        <div className={styles.nav}><div className={styles.logo}><Logo /></div></div>
                        <div className={styles.holder}>
                            {children}
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default DashboardLayout