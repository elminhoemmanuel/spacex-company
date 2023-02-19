import React from "react";
import Avatar from "../../common/Avatar";
import InfoCard from "../../common/InfoCard";
import styles from "./companyCard.module.scss";

const CompanyCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headerCard}>
            <Avatar />
            <h2>Company Name</h2>
        </div>

        <InfoCard position="ceo" name="ceo name" />
        <InfoCard position="cto" name="cto name" />
    </div>
  )
}

export default CompanyCard