import React, {useState} from 'react'


export default function TextForm3(props) {
    
    const [text, setText]   = useState('Enter Text here3');
    
    const handleUpClick = () => {
        console.log("Uppercase was cliked")
        setText("You have clicked on handleUpClick")
    }

    // In textarea, there is a value attribute whose value = {text} which represents actual text in there. and text is a state variable, we can change it with setText. Whenever user tries to change the text in textarea, let's say user types in the textarea "h", then at that moment value ot text becomes => text already present + "h", then we are saying set the text according to that. For that we use below one
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Conver to UpperCase</button>
        </div>
    )
}