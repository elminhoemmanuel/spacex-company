import React from 'react'
import { ILayout } from '../../../interfaces/layout'
import Benefits from '../../page-elements/Benefits'
import styles from "./authLayout.module.scss"

const AuthLayout = ({ children }: ILayout) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.logo}><img src="./images/logo.png" alt='Company logo' /></div>
            <h2 className={styles.header}>Hi there, see what’s new</h2>
            <p className={styles.text}>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
            <Benefits />
        </div>
        <div className={styles.right}>
            <div className={styles.logo}><img src="./images/logo.png" alt='Company logo' /></div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout