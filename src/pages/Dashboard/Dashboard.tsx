import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardLeft from "../../components/page-elements/DashboardLeft";
import DashboardRight from "../../components/page-elements/DashboardRight";
import { AuthContext } from "../../context/Auth";
import { AuthContextType } from "../../interfaces/auth";
import styles from "./dashboard.module.scss"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const logoutInterval = 120
    const { logout } = useContext(AuthContext) as AuthContextType
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            logout();
            navigate("/")
        }, (logoutInterval * 1000))

        return () => clearInterval(interval);
    }, [logout, navigate])

    return (
        <DashboardLayout>
            <div className={styles.container}>
                <DashboardLeft />
                <DashboardRight />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard