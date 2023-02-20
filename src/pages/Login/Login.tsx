import React, { useContext, useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AuthLayout from "../../components/layout/AuthLayout";
import styles from "./login.module.scss";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AuthContext } from "../../context/Auth";
import { AuthContextType } from "../../interfaces/auth";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
    email: yup.string().required("Your email is required"),
    password: yup.string().min(6, "Password should be up to 6 characters").matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 6 characters, one uppercase, one number and one special case character e.g (.*,?/)"
    ).required("Your password is required"),
}).required();
type FormData = yup.InferType<typeof schema>;

const Login = () => {

    const { login } = useContext(AuthContext) as AuthContextType
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const togglePassword = () => setShowPassword(!showPassword)

    const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleLogin = async (userData: FormData) => {
        setError("")
        const res = login(userData.email, userData.password);
        if (res) {
            navigate("/dashboard")
        } else {
            setError("Your email or password is incorrect try again")
        }
    }

    const onSubmit: SubmitHandler<FormData> = (data) => handleLogin(data);

    return (
        <AuthLayout>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.headingBox}>
                    <h3>Login to your dashboard</h3>
                    <p>Provide details to login to your account</p>
                </div>

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => 
                        <Input
                            {...field}
                            label="Email"
                            id="email"
                            type="email"
                            errorText={errors.email?.message}
                        />
                    }
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => 
                        <Input
                            {...field}
                            label="Password"
                            id="password"
                            type={`${showPassword ? "text" : "password"}`}
                            endAdornment={
                                <div onClick={() => togglePassword()} className={styles.eye}><img src="./images/eye.svg" alt="Password icon" /></div>
                            }
                            errorText={errors.password?.message}
                        />
                    }
                />

                <Button type="submit">
                    Login
                </Button>
            </form>
            <p className={styles.loginError}>{error || null}</p>

        </AuthLayout>
    )
}

export default Login