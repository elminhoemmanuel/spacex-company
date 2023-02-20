import React from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

type InputProps = {
    className?: string;
    containerClassName?: string;
    id?: string;
    label?: string;
    errorText?: string;
    endAdornment?: React.ReactNode;
} & React.ComponentProps<"input">

const Input = ({ className, containerClassName, id, label, errorText, endAdornment, ...rest }: InputProps) => {

    return (
        <div className={clsx([styles.container, containerClassName])}>
            {label ? <label htmlFor={id}>{label}</label> : ""}
            <input
                className={clsx({
                    [styles.input]: !endAdornment,
                    [styles.inputAdorned]: endAdornment,
                  }, className)}
                id={id}
                {...rest}
            />
            <p className={styles.error}>{errorText ? errorText : ""}</p>
            {endAdornment ? <div className={styles.endAdornment}>{endAdornment}</div> : null}
        </div>
    )
}

export default Input