import React from 'react'

export default function Navbar1({ 
    title = "Set title here",
    aboutText = "About text here"
    // This will set the default props, if we haven't set any values for any props
    
    // Otherwise, simply receive as "props" here. then you can access like props.title, props.aboutText below
}) {
    // Props are nothing but properties. You created some component, and you want to pass some things into that component. You say this is a component
    return (
        // The below all is BOOTSTRAP NAVBAR CSS
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">{props.title}</a> */}  {/* When we don't want to use default props */}
                    <a className="navbar-brand" href="/">{title}</a>  {/* When we want to use eve default props, then simply like this.*/}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
                                <a className="nav-link" href="/">{aboutText}</a>
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


// This is in older version of setting default props. This won't work now.
// Navbar1.defaultProps = {
//     title: 'Set title here', 
//     aboutText: 'About text here'
// }