import React, { Fragment } from "react";
import "./style.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
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
            <div className="frame">
                <div className="left-side">
                    <div className="large-image">
                        <img className="image" alt="image" src="https://s3-alpha-sig.figma.com/img/e9e9/0144/78639b34d22482c8ad2085a2df93c88e?Expires=1703462400&Signature=ld1HAkIbrI4Y2qyvpAdTNH9B6Dz3a08-DinZIUa8~KvCiSWjlSNAQGcVQY8zoNG0DxNGL7hElUtW7XFYigAmTbecCPvW1OT~j0Nz1LHNrPbKLeOVEd3Asza8qanpUTBsU0nbFFKU3k3BlmlCXBpHMSHj4KevYVN98z4yknyIbG3yBt6y9nczniZLM8kZSR33LbN9YV-L4cw3XixOAOpiH95oYfmsWiRvrQORb~iUZRAw442EVSOZx2SPGU4kXqRcCmjDL9HDzcjVgUZSo4~EMZHFvREtpjsr3rSp7Q5AAhsQlMoB~izKDUQ68efinxm01r22a-J4iHyUQnvjSFn8sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className="logo">
                        <img className="logo-image" alt="logo" src="https://s3-alpha-sig.figma.com/img/1218/f076/c649c7f28349999488ddffc9eabec8b6?Expires=1703462400&Signature=gfII1mQNGCvfKNUecWaw6jBh9GK-IwSZvKt3WFjSp721aWzBKKA~IResPp8A~0YxUxtm7DrvASwJ~UUj6IsDydqxjcNneypIiuG~eeYgdC5bRIUGJfH~EPx~9uMW8B25zpctrVMpp84-egBVSWA3vigwi79uuK537gh4l86Z44iuudwLKZcXzK6Cza1BDFrJmaEDdTZlHflF5c2ct63nW09f8zx0Wstlsj6R2pxIUMTJw0iOzQKx5IC36i~02gecGQpVa-9LwVM1KPnKpA0MSLkc0MeQRRRmKCtnzhDoONqbM8X6j0l7xqeKkEHbrEvYbdzPRHCkAsmlop3ObPlPhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className="right-side">
                        <h1>Create Account</h1> 
                        <form>
                            <div className="create-with-other">
                                <div className="create-google">
                                    <div className="google-logo">
                                        <img className="google-image" alt="google-logo" src="https://s3-alpha-sig.figma.com/img/e314/bd28/b3459ccc4e53f588350edbd6c3dce27b?Expires=1703462400&Signature=Yto5R2PCGKaTg5fSCJVwDnxugOqxigM3Z5Mc0dJb2GP7vlYnksHdCNtMfUXY8cb2BeejSsS1UrTHmuT3MkMvLp6CWS4AvsNDa3r-lAgdQk-dI76BsrV1Bh9-~80cU4NlEjbzeMzO7eQAwwJgBDvlTAcvq-dhvgKj-6YgIzssf-t~IcbgQhmmcCWceOt8fIVZUgHzxT8GXdhAV8JRe2f6M8MkpRtW7VAZgfAul~9NCHr9yYJrmLaRPjieebOK8n4BXRk~ymdhrI5L3Z70xrihp6PT~kF-P6Sqaz-cB2DxSWipH1NMWdebGH18t9w9m7zP1NR95b8rakKIuRNkBsvWbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                    </div>
                                    <div className="google-text">Sign up with Google</div>
                                </div>
                                <div className="create-facebook">
                                    <div className="facebook-logo">
                                        <img className="facebook-image" alt="facebook-logo" src="https://s3-alpha-sig.figma.com/img/23cc/1f54/1f0cd4190d10673ced4b6c7dd369b390?Expires=1703462400&Signature=oiPyqgY8Tzvmh6OTfodL78whGTlQE5HhYnp9Qupy4aZdqUkZfMMy3TkcuS71GTw9UgaNMX2WIqSh59v6-QJzM1kjv2ZDsITKSoPRFMjpNtWeWlozKReKRWB3VmZs6wS44vZRZEWXCZuBeiMz54xdPSaNpH~a2A3DtSQFVvMJ7FfnC80CYfiMhS4WFjV5vVun8TeCgLD46R28tvklKnNSDq9-WE30029YHXBFc2h~lr1U6luWZ~dNicM3XHhYCGLFrtG2fyaOgtwa~eSIEZEVVd~kNPLS06kFuEJ1Nel8wApJ1d4QV4hVAKtz74tS6JKPRvhJ9AyNFs~RoV42JvjhsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                                    </div>
                                    <div className="facebook-text">Sign up with Facebook</div>
                                </div>
                            </div>
                            <div className="or">_ OR _</div>
                            <div className="form-group">
                                <div className="form__group field">
                                    <input class="form__field" type="text" name="firstName" id="firstName" placeholder="First Name" onChange={(e)=>FirstNameChangeHandler(e)} required/>
                                    <label for="name" class="form__label">First Name</label>
                                </div>
                                <div className="form__group field">
                                    <input class="form__field" type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={(e)=>LastNameChangeHandler(e)} required/>
                                    <label for="name" class="form__label">Last Name</label>
                                </div>
                                <div className="form__group field">
                                    <input class="form__field" type="email" name="email" id="email" placeholder="Enter your email" onChange={(e)=>EmailChangeHandler(e)} required/>
                                    <label for="name" class="form__label">Email</label>
                                </div>
                                <div className="form__group field">
                                    <input class="form__field" type="password" name="password" id="password" placeholder="Enter your password" onChange={(e)=>PasswordChangeHandler(e)} required/>
                                    <label for="name" class="form__label">Password</label>
                                </div>
                            </div>
                            <button className="button" type="submit">Create Account</button>
                        </form>
                        <div className="already-have">
                            <p className="already-have-text">Already have an Account ?</p>
                            <p className="or-login"> Login</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};

{/* <div className="overlap">
                    <div className="create-account">
                        <div className="text-wrapper">English (UK)</div>
                        <img className="polygon" alt="Polygon" src="polygon-1.svg" />
                        <div className="div">Create Account</div>
                        <div className="overlap-group">
                            <img className="googlelogo" alt="Googlelogo" src="googlelogo.png" />
                            <div className="text-wrapper-2">Sign up with Google</div>
                        </div>
                        <div className="overlap-2">
                            <img className="facelogo" alt="Facelogo" src="facelogo.png" />
                            <div className="text-wrapper-3">Sign up with Facebook</div>
                        </div>
                        <div className="text-wrapper-4">Full Name</div>
                        <div className="overlap-3">
                            <div className="text-wrapper-5">Email Address</div>
                            <div className="text-wrapper-6">Password</div>
                            <img className="line" alt="Line" src="line-1.svg" />
                            <img className="email" alt="Email" src="email.png" />
                            <img className="hide" alt="Hide" src="hide.png" />
                        </div>
                        <div className="text-wrapper-7">Login in</div>
                        <p className="p">Already have an Account ?</p>
                        <div className="text-wrapper-8">_ OR _</div>
                        <img className="user" alt="User" src="user.png" />
                        <div className="div-wrapper">
                            <div className="text-wrapper-9">Create Account</div>
                        </div>
                    </div>
                    <img className="LOGO-IMAGE" alt="Logo IMAGE" src="LOGO-IMAGE.png" />
                    <img className="READ-title" alt="Read title" src="READ-title.png" />
                </div> */}



export default SignUp;