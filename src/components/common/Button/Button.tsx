import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

type PriBtnProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
} & Omit<React.ComponentProps<"button">, "children">

const PriBtn = ({ children, className, disabled, isLoading, ...rest }: PriBtnProps) => {

  return (
    <button disabled={disabled} className={clsx([styles.button, className])} {...rest}>
      {isLoading ? <p>Loading...</p> : children}
    </button>
  )
}

export default PriBtn