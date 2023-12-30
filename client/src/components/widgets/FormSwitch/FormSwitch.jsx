import React, { Fragment } from "react";
import styles from "./style.module.scss";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const FormSwitch = ( props ) => {
    const loginRoute = "/login";
    const signupRoute = "/sign-up";

    
    const targetRoute = props.alreadyHave ? loginRoute : signupRoute;
    return (
        <Fragment>
            <div className={styles.alreadyhave}>
                <p className={styles.alreadyhavetext}>{props.alreadyHave}</p>
                <Link to={targetRoute}><p className={styles.orlogin}>{props.switchTo}</p></Link>
            </div>
        </Fragment>
    );
};

FormSwitch.propTypes = {
    alreadyHave: PropTypes.string.isRequired,
    switchTo: PropTypes.string.isRequired,
};


export default FormSwitch;