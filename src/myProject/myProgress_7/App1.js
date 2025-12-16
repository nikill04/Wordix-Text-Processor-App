import '../../../App.css';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1';

function App1() {
    return (
        <>
            <Navbar title="TextUtils" />
            <div className="container my-3">
                <TextForm1 heading = "Enter the Text to analyze below" />
            </div>
        </>
    );
}
export default App1;