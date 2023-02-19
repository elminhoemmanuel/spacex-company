import React from "react";
import styles from "./logo.module.scss";
import clsx from "clsx";

type Props = {
    className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={clsx([styles.logo, className])}>
        <img src="./images/logo.png" alt="Company logo" />
    </div>
  )
}

export default Logo