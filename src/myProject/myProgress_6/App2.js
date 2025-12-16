import '../../App.css';
import Navbar2 from './components/Navbar2';

function App() {
    return (
        <>
            <Navbar2 title="TextUtils2" aboutText="About TextUtils"/>
            {/* <Navbar2 title={3} aboutText="About TextUtils"/> */}
            {/* <Navbar2 title={3} aboutText="About TextUtils"/> */  /* ==> This will show an error as because in Navbar2 we have set the propTypes to string for the tile */}
        </>
    );
}
export default App;