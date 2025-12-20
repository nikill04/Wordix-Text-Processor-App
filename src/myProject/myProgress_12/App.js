import '../../App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
    const [mode, setMode] = useState('light')     // Whether dark mode is enabled or not

    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark')
            // document.body.style.backgroundColor = 'rgba(27, 51, 66, 1)'
            document.body.style.backgroundColor = 'rgba(43, 47, 67, 1)'
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
        }
    }
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <div className="container my-3">
                <TextForm heading = "Enter the Text to analyze below" mode={mode} />
            </div>
        </>
    );
}
export default App;