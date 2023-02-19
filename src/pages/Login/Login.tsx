import React, { useState } from "react"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import AuthLayout from "../../components/layout/AuthLayout"
import styles from "./login.module.scss"

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = ()=> setShowPassword(!showPassword)

    return (
        <AuthLayout>
            <div className={styles.headingBox}>
                <h3>Login to your dashboard</h3>
                <p>Provide details to login to your account</p>
            </div>

            <Input
                label="Email"
                id="email"
                type="email"
            />

            <Input
                label="Password"
                id="password"
                type={`${showPassword ? "text" : "password"}`}
                endAdornment={
                    <div onClick={()=>togglePassword()} className={styles.eye}><img src="./images/eye.svg" alt="Password icon" /></div>
                }
            />

            <Button>
                Login
            </Button>

        </AuthLayout>
    )
}

export default Login