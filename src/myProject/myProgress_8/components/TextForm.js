import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText]   = useState('');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
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
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            {/* text.split(" ") returns array with elements as our text wich is divided by space */}

            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <p>Preview</p>
            <p>{text}</p>
            {/* {text} */}

            {/* Here, if we observe if we type or include any extra spaces in the textarea, then they won't be shown in the preview. Becasuse,
                  The <textarea> element is a form control that is designed for user input.
                    It preserves all the characters entered by the user, including spaces, tabs, and newlines, exactly as they are typed. This is because:
                            The text inside a <textarea> is treated as raw input, not rendered HTML.
                            It shows exactly what the user types, without applying any formatting or collapsing of whitespace.
            
            */}
        </div>
        </>
    )
}