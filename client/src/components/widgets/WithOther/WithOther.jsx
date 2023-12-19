import React, { Fragment } from "react";
import "./style.css";
import PropTypes from 'prop-types'


const WithOther = ( props ) => {   
    return (    
        <Fragment>
            <div className="create-with-other">
                <div className="create-google">
                    <div className="google-logo">
                        <img className="google-image" alt="google-logo" src="https://s3-alpha-sig.figma.com/img/e314/bd28/b3459ccc4e53f588350edbd6c3dce27b?Expires=1703462400&Signature=Yto5R2PCGKaTg5fSCJVwDnxugOqxigM3Z5Mc0dJb2GP7vlYnksHdCNtMfUXY8cb2BeejSsS1UrTHmuT3MkMvLp6CWS4AvsNDa3r-lAgdQk-dI76BsrV1Bh9-~80cU4NlEjbzeMzO7eQAwwJgBDvlTAcvq-dhvgKj-6YgIzssf-t~IcbgQhmmcCWceOt8fIVZUgHzxT8GXdhAV8JRe2f6M8MkpRtW7VAZgfAul~9NCHr9yYJrmLaRPjieebOK8n4BXRk~ymdhrI5L3Z70xrihp6PT~kF-P6Sqaz-cB2DxSWipH1NMWdebGH18t9w9m7zP1NR95b8rakKIuRNkBsvWbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className="google-text">{props.withGoogle}</div>
                </div>
                <div className="create-facebook">
                    <div className="facebook-logo">
                        <img className="facebook-image" alt="facebook-logo" src="https://s3-alpha-sig.figma.com/img/23cc/1f54/1f0cd4190d10673ced4b6c7dd369b390?Expires=1703462400&Signature=oiPyqgY8Tzvmh6OTfodL78whGTlQE5HhYnp9Qupy4aZdqUkZfMMy3TkcuS71GTw9UgaNMX2WIqSh59v6-QJzM1kjv2ZDsITKSoPRFMjpNtWeWlozKReKRWB3VmZs6wS44vZRZEWXCZuBeiMz54xdPSaNpH~a2A3DtSQFVvMJ7FfnC80CYfiMhS4WFjV5vVun8TeCgLD46R28tvklKnNSDq9-WE30029YHXBFc2h~lr1U6luWZ~dNicM3XHhYCGLFrtG2fyaOgtwa~eSIEZEVVd~kNPLS06kFuEJ1Nel8wApJ1d4QV4hVAKtz74tS6JKPRvhJ9AyNFs~RoV42JvjhsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div className="facebook-text">{props.withFacebook}</div>
                </div>
            </div>
        </Fragment>
    );
};

WithOther.propTypes = {
    withGoogle: PropTypes.string.isRequired,
    withFacebook: PropTypes.string.isRequired,
};

export default WithOther;