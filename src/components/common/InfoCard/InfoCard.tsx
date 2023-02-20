import React from "react";
import styles from "./infoCard.module.scss";

type Props = {
    name: string;
    position: string;
}

const InfoCard = ({ position, name }: Props) => {
  return (
    <div className={styles.container}>
        <p className={styles.position}>{position}</p>
        <p className={styles.name}>{name}</p>
    </div>
  )
}

export default InfoCard