import React from 'react'

export default function TextForm1(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Conver to UpperCase</button>
        </div>
    )
}