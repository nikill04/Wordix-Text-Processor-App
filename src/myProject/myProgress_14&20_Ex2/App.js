import '../../App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes, // Change 'Switch' to 'Routes'
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    
    const removeBodyClasses = () => {
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-primary')
        document.body.classList.remove('bg-danger')
    }
    const toggleMode = (cls) => {
        removeBodyClasses()
        document.body.classList.add('bg-' + cls)
        // '.classList' says what are all the classes that are present to the element(Here it is 'body'). Here we are adding the "bg-'cls'", that means for example after adding .bg-danger to the classList of 'body' i.e., now body has .bg-danger class. and .bg-danger class means background color being red. So, 'body''s background color will be changed to red. 
        // But after adding .bg-danger here after even if we add other bg-classes, they won't work as first bg-danger has been added it will be dominating. So, before adding each bg-class we have to remove all the existing background color classes. So, that's why we use removeBodyClasses function here.
    };


    const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (

        // For Better understanding of Routing, CLICK ==> https://chatgpt.com/share/672110b0-504c-800d-8015-95524de9364a
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route path="/about" element={<About mode={mode}/>} />
                        <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
                        {/* <Route path="*" element={<NoMatch/> } /> */}
                    </Routes>
                </div>
            </Router>
    );
}

export default App;