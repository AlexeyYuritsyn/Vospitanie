import './_fetch-error.scss';
import slash from './slash.svg';
import React from "react";


const FetchError = (props) => {

    const {error} = props;

    return (
        <div className="fetch-error">
            <div className="fetch-error-message">
                <img
                    className="fetch-error-icon"
                    src={slash}
                    alt="slash"
                />
                <p className="fetch-error-text">
                    {error}
                </p>
            </div>
            <p className="fetch-error-text-contact">
                <span>Техподдержка: </span>
                <a
                    className="fetch-error-link"
                    href="tel:+74995505097"
                >
                    +7 (499) 550-50-97
                </a>
            </p>
        </div>
    )
}

export default FetchError;