import '../../../App.css';
import Navbar from './components/Navbar';
import TextForm3 from './components/TextForm3';

function App3() {
    return (
        <>
            <Navbar title="TextUtils3" />
            <div className="container my-3">
                <TextForm3 heading = "Enter the Text to analyze below" />
            </div>
        </>
    );
}
export default App3;