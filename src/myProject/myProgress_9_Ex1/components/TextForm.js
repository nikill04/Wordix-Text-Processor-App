import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ""
        setText(newText)
    }

    const handleCopyClick = () => {
        let testing = document.getElementById("myBox")
        testing.select();  //  ==> This is not necessary.It is typically used to visually highlight the text in the input or textarea field.

        navigator.clipboard.writeText(testing.value)
        // navigator.clipboard: This is part of the Clipboard API, which provides functionality to read and write directly to the system clipboard in a secure way.
        // writeText(): This method takes a string as an argument and writes it to the clipboard.
        // testing.value: It represents the actual text content of the input or textarea element (identified here by text).
    }

    const handleExtraSpaces = () => {
        // text.split(...):
        // The split() method is called on the text string. This method divides the string into an array of substrings based on the pattern defined in the argument.
        let newText = text.split(/[ ] + /)
        // '/[ ] + /' ==>  This is a regular expression (regex) used as the separator for the split method. Let's dissect this regex:
        // [ ]: This is a character class that matches a single space character. However, writing [ ] is a bit unnecessary; it could just be a single space (' ').
        // +: The + quantifier matches one or more occurrences of the preceding character. In this context, it matches one or more spaces.
        // In JavaScript, regex operations are typically enclosed in '/' and '/'
        setText(newText.join(" "))
    }


    // In textarea, there is a value attribute whose value = {text} which represents actual text in there. and text is a state variable, we can change it but setText. Whenever user tries to change the text in textarea, let's say user types in the textarea "h", then at that moment value ot text becomes => text already present + "h", then we are saying set the text according to that. For that we use below one
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                {/* text.split(" ") returns array with elements as our text wich is divided by space */}

                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <p>Preview</p>
                <p>{text}</p>
            </div>
        </>
    )
}