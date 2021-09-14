import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { SignUpUrl } from '../../Routes/Routes';
import { ValidInput } from '../../Components/ValidInput/ValidInput';
import { FormError } from "../../Components/FormError/FormError";
import { validateEmail } from "../../Services/validateEmail" ;
import { validatePassword } from "../../Services/validatePassword" ;

const Login = () => {
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const onEmailValidChanged = useCallback(
        (isValid) => {
            if (isValid === false) {
                setEmailError ('Email введен неверно');
            } else {
                setEmailError ();
            }
        },
        [],
    );

    const onPasswordValidChanged = useCallback(
        (isValid) => {
            if (isValid === false) {
                setPasswordError ('Пароль введен неверно');
            } else {
                setPasswordError ();
            }
        },
        [],
    );

    const onEmailChanged = useCallback((text) =>{
        setEmail(text);
    }, []);

    const onLogin = useCallback (() => {
        console.log(`email: ${email}, password:`)
    }, [email]);

    return (
        <div className={styles.background}>
            <div className={styles.margin}></div>
            <form method="post" action="#" className={styles.form}>
                <p className={styles.login + ' ' + styles.text_B}>Вход</p>
                <FormError errors={[emailError, passwordError]} />
                <p className={styles.row_L}>
                    <label className={styles.text + ' ' + styles.label} for="login">Логин:</label>
                    <ValidInput 
                        type="text" 
                        placeholder="name@example.com" 
                        validate ={validateEmail}
                        onChanged = {onEmailChanged}
                        onValidChanged={onEmailValidChanged} />
                </p>
                <p className={styles.row_L}>
                    <label className={styles.text + ' ' + styles.label} for="password">Пароль:</label>
                    <ValidInput 
                        type="password" 
                        placeholder="******" 
                        validate ={validatePassword}
                        onValidChanged={onPasswordValidChanged} />
                </p>
                <p className={styles.row_L}>
                    <button className={styles.text + ' ' + styles.button} type="submit" onClick={onLogin}>Войти</button>
                </p>
                <p className={styles.forgotpasswordSignup}><a href="#">Забыли пароль?</a></p>
                <p className={styles.forgotpasswordSignup}><NavLink to={SignUpUrl} >Регистрация</NavLink></p>
            </form>
            <div className={styles.margin}></div>
        </div>
    );
}
export default Login;