import React from "react";
import { LayoutProps } from "../../../interfaces/layout";
import Logo from "../../common/Logo";
import Benefits from "../../page-elements/Benefits";
import styles from "./authLayout.module.scss";


const AuthLayout = ({ children }: LayoutProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Logo className={styles.logo} />
                <h2 className={styles.header}>Hi there, see what’s new</h2>
                <p className={styles.text}>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
                <Benefits />
            </div>
            <div className={styles.right}>
                <Logo className={styles.logo} />
                <div className={styles.card}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout