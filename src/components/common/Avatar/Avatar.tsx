import React from "react";
import styles from "./avatar.module.scss"

type Props = {
    name?: string;
}

const Avatar = ({ name }: Props) => {
  return (
    <div className={styles.avatar}>
        <p>{name || "CN"}</p>
    </div>
  )
}

export default Avatar