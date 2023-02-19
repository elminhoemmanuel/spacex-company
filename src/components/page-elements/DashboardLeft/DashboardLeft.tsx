import React from "react";
import CompanyCard from "../CompanyCard";
import styles from "./dashboardLeft.module.scss";

const DashboardLeft = () => {
  return (
    <div className={styles.container}>
        <CompanyCard />
    </div>
  )
}

export default DashboardLeft