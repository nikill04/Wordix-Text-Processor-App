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
    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgba(27, 51, 66, 1)';
            showAlert("Dark mode has been enabled", "success");
            // document.title = 'TextUtils - Dark Mode';
            // setInterval(() => {
            //     document.title = 'TextUtils is Amazing Mode';
            // }, 2000);
            // setInterval(() => {
            //     document.title = 'Install TextUtils Now';
            // }, 1500);
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            // document.title = 'TextUtils - Light Mode';
        }
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