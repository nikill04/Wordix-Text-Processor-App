import React, { useState } from 'react'


export default function TextForm(props) {



    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was cliked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to LowerCase!", "success")
    }

    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("text cleared!", "success")
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox")
        text.select();  //  ==> This is not necessary.It is typically used to visually highlight the text in the input or textarea field.

        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges() // This line is used to deselect the text after copying it to the clipboard.
        props.showAlert("copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        // text.split(...):
        // The split() method is called on the text string. This method divides the string into an array of substrings based on the pattern defined in the argument.
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))
        props.showAlert("extra spaces removed!", "success")
    }


    // In textarea, there is a value attribute whose value = {text} which represents actual text in there. and text is a state variable, we can change it but setText. Whenever user tries to change the text in textarea, let's say user types in the textarea "h", then at that moment value ot text becomes => text already present + "h", then we are saying set the text according to that. For that we use below one
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'rgba(52, 91, 125, 1)' }}>   {/* ==> One curly brace is for normally writing JavaScript and another one is for in javaScript only for writing and object */}
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#264e76' : 'white', color: props.mode === 'dark' ? 'white' : 'rgba(52, 91, 125, 1)' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                {/* text.split(" ") returns array with elements as our text wich is divided by space */}
                {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
                {/* For understanding the below one correctly first refer "TextForm 1.png"
                    a1 = " nik hil"
                   Here, a1 has a leading space before "nik." When you run a1.split(" "), the split operation treats the leading space as a separator, creating an empty string(i.e., ==> "") as the first element in the resulting array. So the result is ["", "nik", "hil"].
                    a2 = " nik hil "
                   This string has both leading and trailing spaces. When you run a2.split(" "), it results in ["", "nik", "hil", ""] because both the leading and trailing spaces are treated as separators, adding an empty string at both the start and end of the array. 
                   
                   So, For removing those empty strings i.e., "". We use the below filter function */}

                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length}</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes to read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}