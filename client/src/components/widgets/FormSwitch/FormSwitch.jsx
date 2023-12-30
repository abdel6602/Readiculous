import React, { Fragment } from "react";
import styles from "./style.module.scss";
import PropTypes from 'prop-types'


const FormSwitch = ( props ) => {
    return (
        <Fragment>
            <div className={styles.alreadyhave}>
                <p className={styles.alreadyhavetext}>{props.alreadyHave}</p>
                <p className={styles.orlogin}>{props.switchTo}</p>
            </div>
        </Fragment>
    );
};

FormSwitch.propTypes = {
    alreadyHave: PropTypes.string.isRequired,
    switchTo: PropTypes.string.isRequired,
};


export default FormSwitch;