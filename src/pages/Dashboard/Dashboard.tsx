import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardLeft from "../../components/page-elements/DashboardLeft";
import DashboardRight from "../../components/page-elements/DashboardRight";
import styles from "./dashboard.module.scss"

const Dashboard = () => {

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