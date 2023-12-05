import "./App.css";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="bg-[#0b0b23] py-2 relative   mx-auto">
            <img
                src="https://codewithmosh.com/_next/static/media/bg-grid-lighter.4c1e8196.svg"
                alt=""
                className="absolute top-0 left-0"
            />
            <Home />
        </div>
    );
}

export default App;
