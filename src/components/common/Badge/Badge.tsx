import React from "react";
import styles from "./badge.module.scss"

type Props = {
    text: string;
    img?: string;
}

const Badge = ({ text, img }: Props) => {
  return (
    <div className={styles.badge}>
        <div><img src={img} alt="badge icon" /></div>
        <p>{text}</p>
    </div>
  )
}

export default Badge