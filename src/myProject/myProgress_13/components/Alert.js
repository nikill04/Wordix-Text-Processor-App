import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        // <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"></div> ==> This is the original syntax from bootsstrap
        // We have written "props.alert &&" because if we don't mention it, initially 'null' is the value and it will throw an error. So what the below one does is, if first props.alert is not null then only it will go to the second statement or display the alert

        // This happens because all the JSX will converted to JavaScript Calls!
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
  )
}

export default Alert