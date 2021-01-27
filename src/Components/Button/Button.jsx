import './_button.scss';
import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const ExternalLink = (props) => {

    const {link, value} = props;

    return (
        <a
            className='button'
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {value}
        </a>
    )
}

const InternalLink = (props) => {

    const {link, value} = props;

    return (
        <Link
            className='button'
            to={link}
        >
            {value}
        </Link>
    )
}

const Button = (props) => {

    const {link, value, internal} = props;

    return (
        <div className="button-container">
            {internal
                ? <InternalLink link={link} value={value} />
                : <ExternalLink link={link} value={value} />}
        </div>
    )
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    internal: PropTypes.bool.isRequired,
};

export default Button;
