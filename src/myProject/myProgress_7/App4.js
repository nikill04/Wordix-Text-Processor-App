import '../../../App.css';
import Navbar from './components/Navbar';
import TextForm4 from './components/TextForm4';

function App4() {
    return (
        <>
            <Navbar title="TextUtils4" />
            <div className="container my-3">
                <TextForm4 heading = "Enter the Text to analyze below" />
            </div>
        </>
    );
}
export default App4;