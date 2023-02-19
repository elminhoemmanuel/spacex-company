import React from "react";
import { LayoutProps } from "../../../interfaces/layout";
import Logo from "../../common/Logo";
import styles from "./dashboardLayout.module.scss";

const DashboardLayout = ({ children }: LayoutProps) => {
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