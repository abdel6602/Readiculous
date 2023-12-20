import React, { Fragment } from "react";
import "./style.css";
import PropTypes from 'prop-types'


const FormSwitch = ( props ) => {
    return (
        <Fragment>
            <div className="already-have">
                <p className="already-have-text">{props.alreadyHave}</p>
                <p className="or-login">{props.switchTo}</p>
            </div>
        </Fragment>
    );
};

FormSwitch.propTypes = {
    alreadyHave: PropTypes.string.isRequired,
    switchTo: PropTypes.string.isRequired,
};


export default FormSwitch;