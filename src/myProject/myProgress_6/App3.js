import '../../App.css';
import Navbar3 from './components/Navbar3';

function App() {
    return (
        <>
            <Navbar3/>  
            {/* Here, this will throw an error as we haven't sent set any value for the prop "title" */}
        </>
    );
}
export default App;