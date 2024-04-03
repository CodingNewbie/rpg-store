import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Shop from "./pages/Shop";

function App() {
    const [showShop, setShowShop] = useState(false);

    const toggleShop = () => {
        setShowShop(!showShop);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Title />
                <Footer onOpenShop={toggleShop} />
                {showShop && <Shop onClose={toggleShop} />}
            </div>
        </BrowserRouter>
    );
}

export default App;
