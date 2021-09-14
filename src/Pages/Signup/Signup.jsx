import React from "react";
import { NavLink } from "react-router-dom";
import { HomeUrl } from "../../Routes/Routes";
import styles from "./Signup.module.css";

const Signup = () => {

  return (
    <div className={styles.background}>
      <div className={styles.margin}></div>
      <form method="post" action="#" className={styles.form}>
        <p className={styles.row + " " + styles.text_B}>Зарегистрироваться</p>
        <p className={styles.row + " " + styles.text_S}>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
        <div className={styles.space}></div>
        <p className={styles.row_L}>
          <label className={styles.text + " " + styles.label} for="login">Логин:</label>
          <input className={styles.text + " " + styles.inputField} type="text" name="login" />
        </p>
        <p className={styles.row_L}>
          <label className={styles.text + " " + styles.label} for="password">Пароль:</label>
          <input className={styles.text + " " + styles.inputField} type="password" name="password" />
        </p>
        <p className={styles.row_L}>
          <label className={styles.text + " " + styles.label} for="password">Повторите пароль:</label>
          <input className={styles.text + " " + styles.inputField} type="password" name="password" />
        </p>
        <p className={styles.row_L}>
          <label className={styles.text + " " + styles.label} for="Email">Email:</label>
          <input className={styles.text + " " + styles.inputField} type="text" name="Email" />
        </p>
        <p className={styles.row_L}>
          <label className={styles.text + " " + styles.label} for="login">Имя:</label>
          <input className={styles.text + " " + styles.inputField} type="text" name="name" />
        </p>
        <p className={styles.row + " " + styles.forgotpasswordSignup}><NavLink to={HomeUrl}>Вернуться на Главную страницу</NavLink></p>
        <p className={styles.row_L + " " + styles.signupsubmit}>
          <button className={styles.text + " " + styles.button} type="submit">Регистрация</button>
        </p>
      </form>
      <div className={styles.margin}></div>
    </div>
  );
}
export default Signup;