import React, {useState} from 'react'


export default function TextForm2(props) {
    
    // general syntax : const [count, setCount] = useState('0');
    const [text, setText]   = useState('Enter Text here2');
    // What we are saying from the above syntax is, "text" here is that is my text, in "text" variable this ==> "Enter Text here2" default value will come. And whenver we update that text, we update it through setText
    
    // text = "next text";      // ==> Wrong way to change the state
    //setText("next text");       // ==> Also wrong way to change the state, as it should be used to inside a function

    const handleUpClick = () => {
        console.log("Uppercase was cliked")
        setText("You have clicked on handleUpClick")
    }

    const handleOnChange = () => {
        console.log("On change")
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* We have to use 'onChange' attribute because here we used value = a state variable. It is mandatory to update this state, whenever user types inside that textarea or for occuring of anyother events. */}
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Conver to UpperCase</button>
        </div>
    )
}