import './Appa.css';

let name = "nikhil";
function App() {
    return(
        <>
        <div className="blank">Lovely</div>
        <nav>
            <li>Home</li>
            <li>About</li>          
            <li>Contact</li>
        </nav>
        <div className="container">
            <h1>Hello {name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt sequi ipsum impedit placeat illo quibusdam aspernatur culpa pariatur, rerum facilis soluta voluptas provident alias at quasi officia itaque aliquam, dolor tenetur fugit? Ut.</p>
        </div>
        <img src="" alt="" />

        {/* Any tag in 'jsx' should always be definitely closed like the ending one should contain '/' in it. you can observe above */}
        </>
    );
}

export default App;