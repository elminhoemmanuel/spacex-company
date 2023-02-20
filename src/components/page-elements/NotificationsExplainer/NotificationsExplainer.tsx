import React from "react";
import styles from "./notifsExplainer.module.scss";


const NotificationsExplainer = () => {
  return (
    <div className={styles.container}>
        <h2 data-testid="header">📫 Notifications</h2>
        <p data-testid="text">Receive notifcations about your rider performance, efficiency reviews and a lot more</p>
    </div>
  )
}

export default NotificationsExplainer