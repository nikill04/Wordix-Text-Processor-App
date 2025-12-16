import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was cliked" + text)
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
        let text = document.getElementById("myBox")
        text.select();  //  ==> This is not necessary.It is typically used to visually highlight the text in the input or textarea field.

        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () => {
        // text.split(...):
        // The split() method is called on the text string. This method divides the string into an array of substrings based on the pattern defined in the argument.
        let newText = text.split(/[ ] + /)
        // '/[ ] + /' ==>  This is a regular expression (regex) used as the separator for the split method. Let's dissect this regex:
        // [ ]: This is a character class that matches a single space character. However, writing [ ] is a bit unnecessary; it could just be a single space (' ').
        // +: The + quantifier matches one or more occurrences of the preceding character. In this context, it matches one or more spaces.
        // In JavaScript, regex operations are typically enclosed in '/' and '/'

        // To learn more, click ==> https://chatgpt.com/share/6724c20a-c87c-800d-90d3-42a37b7e2e09
        setText(newText.join(" "))
    }


    // In textarea, there is a value attribute whose value = {text} which represents actual text in there. and text is a state variable, we can change it but setText. Whenever user tries to change the text in textarea, let's say user types in the textarea "h", then at that moment value ot text becomes => text already present + "h", then we are saying set the text according to that. For that we use below one
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>   {/* ==> One curly brace is for normally writing JavaScript and another one is for in javaScript only for writing and object */}
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                {/* text.split(" ") returns array with elements as our text wich is divided by space */}

                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Enter something in the TextBox above to Preview here"}</p>
            </div>
        </>
    )
}