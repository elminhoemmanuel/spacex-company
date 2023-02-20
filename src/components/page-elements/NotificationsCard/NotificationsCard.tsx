import React from "react";
import { notifications } from "../../../data";
import styles from "./notificationsCard.module.scss";


const NotificationsCard = () => {
  return (
    <div className={styles.card}>
        { notifications?.map((notif)=>(
            <div className={styles.notif} key={notif} >
                <div className={styles.notifIcon}><img data-testid="notification icon" src={notif} alt="notification icon" /></div>
                <div className={styles.notifLoading}><img src="/images/notifloading.svg" alt="notification loading indicator" /></div>
            </div>
        )) }
    </div>
  )
}

export default NotificationsCard