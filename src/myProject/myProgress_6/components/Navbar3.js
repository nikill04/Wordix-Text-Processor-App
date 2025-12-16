import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar3(props) {
    // Props are nothing but properties. You created some component, and you want to pass some things into that component. You say this is a component, but there are some variables in it, but i will what those variables are
    return (
        // The below all is BOOTSTRAP NAVBAR CSS
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// This is for when you want specific input types for props, when you send other types that will show an error
Navbar3.propTypes={
    title: PropTypes.string.isRequired, // ==> if we set something to 'isRequired' then it is mandatory to sent or set the value of that prop. Otherwise it will throw an error
    aboutText: PropTypes.string
}