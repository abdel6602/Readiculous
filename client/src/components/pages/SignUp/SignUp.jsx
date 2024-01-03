import React, { Fragment } from "react";
import styles from "./signup.module.scss";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import WithOther from "../../widgets/WithOther/WithOther";
import FormSwitch from "../../widgets/FormSwitch/FormSwitch";


export default function SignUp () {
    const [Email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
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
    const onSubmitHandler = (event) => {
        event.preventDefault();
        async function temp (){
          try{
              const response = await fetch("http://localhost:8080/auth",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: 
                  JSON.stringify({
                    email: Email,
                    firstName: firstName,
                    lastName: lastName,
                    password: Password
                  }),
                
              })
              const responseData = await response.json();
              console.log(responseData);
                if (! responseData.userID) {
                    console.error("Error:", responseData.message);
                } else {
                    alert(responseData.message);
                    localStorage.setItem("userID", responseData.userID);
                    navigate("/");
                }
            } catch (err) {
                console.error("Error:", err.message);
            }
        }
        temp();
    }
    
    return (
        <Fragment>
            <div className={styles.frame}>
                <div className={styles.leftside}>
                    <div className={styles.signupimage}>
                        <img className={styles.image} alt="image" src="https://s3-alpha-sig.figma.com/img/e9e9/0144/78639b34d22482c8ad2085a2df93c88e?Expires=1703462400&Signature=ld1HAkIbrI4Y2qyvpAdTNH9B6Dz3a08-DinZIUa8~KvCiSWjlSNAQGcVQY8zoNG0DxNGL7hElUtW7XFYigAmTbecCPvW1OT~j0Nz1LHNrPbKLeOVEd3Asza8qanpUTBsU0nbFFKU3k3BlmlCXBpHMSHj4KevYVN98z4yknyIbG3yBt6y9nczniZLM8kZSR33LbN9YV-L4cw3XixOAOpiH95oYfmsWiRvrQORb~iUZRAw442EVSOZx2SPGU4kXqRcCmjDL9HDzcjVgUZSo4~EMZHFvREtpjsr3rSp7Q5AAhsQlMoB~izKDUQ68efinxm01r22a-J4iHyUQnvjSFn8sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className={styles.logo}>
                        <img className={styles.logoimage} alt="logo" src="https://s3-alpha-sig.figma.com/img/1218/f076/c649c7f28349999488ddffc9eabec8b6?Expires=1703462400&Signature=gfII1mQNGCvfKNUecWaw6jBh9GK-IwSZvKt3WFjSp721aWzBKKA~IResPp8A~0YxUxtm7DrvASwJ~UUj6IsDydqxjcNneypIiuG~eeYgdC5bRIUGJfH~EPx~9uMW8B25zpctrVMpp84-egBVSWA3vigwi79uuK537gh4l86Z44iuudwLKZcXzK6Cza1BDFrJmaEDdTZlHflF5c2ct63nW09f8zx0Wstlsj6R2pxIUMTJw0iOzQKx5IC36i~02gecGQpVa-9LwVM1KPnKpA0MSLkc0MeQRRRmKCtnzhDoONqbM8X6j0l7xqeKkEHbrEvYbdzPRHCkAsmlop3ObPlPhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className={styles.rightside}>
                        <h1 className={styles.h1}>Create Account</h1> 
                        <form onSubmit = {onSubmitHandler} action = "/" method = "post">
                            <WithOther withGoogle="Sign up with Google" withFacebook="Sign up with Facebook"/>
                            <div className={styles.or}>_ OR _</div>
                            <div className={styles.formgroup}>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="text" name="firstName" id="firstName" placeholder="First Name" onChange={(e)=>FirstNameChangeHandler(e)} required/>
                                    <label htmlFor="Fname" className={styles.form__label}>First Name</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={(e)=>LastNameChangeHandler(e)} required/>
                                    <label htmlFor="Lname" className={styles.form__label}>Last Name</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="email" name="email" id="email" placeholder="Enter your email" onChange={(e)=>EmailChangeHandler(e)} required/>
                                    <label htmlFor="email" className={styles.form__label}>Email</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input className={styles.form__field} type="password" name="password" id="password" placeholder="Enter your password" onChange={(e)=>PasswordChangeHandler(e)} required/>
                                    <label htmlFor="pass" className={styles.form__label}>Password</label>
                                </div>
                            </div>
                            <button className={styles.button} type="submit">Create Account</button>
                        </form>
                        <FormSwitch alreadyHave="Already have an account?" switchTo="Log in"/>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};

