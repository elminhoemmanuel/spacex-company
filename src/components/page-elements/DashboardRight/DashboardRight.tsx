import React from "react";
import Badge from "../../common/Badge";
import NotificationsCard from "../NotificationsCard";
import NotificationsExplainer from "../NotificationsExplainer";
import styles from "./dashboardRight.module.scss";

const DashboardRight = () => {
  return (
    <div className={styles.container}>
        <Badge text="Coming soon" img="/images/time.svg" />
        <NotificationsCard />
        <NotificationsExplainer />
    </div>
  )
}

export default DashboardRight