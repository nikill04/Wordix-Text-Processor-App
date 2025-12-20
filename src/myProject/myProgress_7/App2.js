import '../../App.css';
import Navbar from './components/Navbar';
import TextForm2 from './components/TextForm2';

function App2() {
    return (
        <>
            <Navbar title="TextUtils2" />
            <div className="container my-3">
                <TextForm2 heading = "Enter the Text to analyze below" />
            </div>
        </>
    );
}
export default App2;