import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Title />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
