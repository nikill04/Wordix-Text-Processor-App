import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title = 'Set title here', aboutText = 'About text here' }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{aboutText}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

// We don't use default as below as it is old. Instead, we should use default parameters as used in JavaScript instead. i.e., setting the default values in parameters of the function only. 
// Navbar.defaultProps = {
//     title: 'Set title here', 
//     aboutText: 'About text here'
// }  

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
};
