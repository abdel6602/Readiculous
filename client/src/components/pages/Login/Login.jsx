import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.scss";
import WithOther from "../../widgets/WithOther/WithOther";
import FormSwitch from "../../widgets/FormSwitch/FormSwitch";

export default function Login () {
    const [Email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    //const navigate = useNavigate();
    const EmailChangeHandler = (event) => {
        setEmail(event.target.value)
      }
      const PasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
    const FirstNameChangeHandler = (event) => {
        setFirstName(event.target.value)
    }
    const LastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    }
    
    return (
        <Fragment>
            <div className={styles.frame}>
                <div className={styles.leftside}>
                    <div className={styles.loginimage}>
                        <img className={styles.image} alt="image" src="https://s3-alpha-sig.figma.com/img/2ba5/27ee/df3ed0cb5034089d1d35fef8cacded88?Expires=1703462400&Signature=ETcQAzqn69fnCuPuj8hsFk92VhKFEVEZEL2o8CSvUMR3Aa4f9yqIiipJq0-8S4XnbYHvn22Q1Wt9F2O93B9bbnlUq606F--vXEy~PMBHb7CMB87HQ9et68kHy1UOFxchMz6xEYhrBeBqzpLWY0cPoiNQI~YYVEShC6JGiPsqkuXUL9XJcKxEYUoVDHtDLK53fOgGhC-48YPHZWJnH-0VtTnUTmYpPqYkM2BnfXn5E-xdIAAw3VYj-so7jFi62oU07ikVNYPBz3hvL7Oc1JsTbZcwjS48rFfeKBYSG6hLxanuiayMzY6pqgslTR5rgTuTu9BzdKfl4oW36JJwBcL0vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className={styles.logo}>
                        <img className={styles.logoimage} alt="logo" src="https://s3-alpha-sig.figma.com/img/1218/f076/c649c7f28349999488ddffc9eabec8b6?Expires=1703462400&Signature=gfII1mQNGCvfKNUecWaw6jBh9GK-IwSZvKt3WFjSp721aWzBKKA~IResPp8A~0YxUxtm7DrvASwJ~UUj6IsDydqxjcNneypIiuG~eeYgdC5bRIUGJfH~EPx~9uMW8B25zpctrVMpp84-egBVSWA3vigwi79uuK537gh4l86Z44iuudwLKZcXzK6Cza1BDFrJmaEDdTZlHflF5c2ct63nW09f8zx0Wstlsj6R2pxIUMTJw0iOzQKx5IC36i~02gecGQpVa-9LwVM1KPnKpA0MSLkc0MeQRRRmKCtnzhDoONqbM8X6j0l7xqeKkEHbrEvYbdzPRHCkAsmlop3ObPlPhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className={styles.rightside}>
                        <h1 className={styles.h1}>Login</h1> 
                        <form action="/" method="get">
                            <WithOther withGoogle="Login with Google" withFacebook="Login with Facebook"/>
                            <div className={styles.or}>_ OR _</div>
                            <div className={styles.formgroup}>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="email" name="email" id="email" placeholder="Enter your email" onChange={(e)=>EmailChangeHandler(e)} required/>
                                    <label for="name" class={styles.form__label}>Email</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="password" name="password" id="password" placeholder="Enter your password" onChange={(e)=>PasswordChangeHandler(e)} required/>
                                    <label for="name" class={styles.form__label}>Password</label>
                                </div>
                            </div>
                            <button className={styles.button} type="submit">Login</button>
                        </form>
                        <FormSwitch alreadyHave="Don't have an account?" switchTo="Sign up"/>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};
