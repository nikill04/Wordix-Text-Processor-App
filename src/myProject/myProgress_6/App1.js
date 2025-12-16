import '../../App.css';
import Navbar1 from './components/Navbar1';

function App() {
    return (
        <>
            <Navbar1 title="TextUtils1" aboutText="About TextUtils"/>

            {/* Once Comment above one and try the below one i.e., without setting any props then as written in Navbar1 component, default props will be set */}

            {/* <Navbar1/> */}
        </>
    );
}
export default App;