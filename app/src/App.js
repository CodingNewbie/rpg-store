import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Shop from "./pages/Shop";
import Ranking from "./pages/Ranking";
import Messages from "./pages/Messages";
import Mission from "./pages/Mission";
import Settings from "./pages/Settings";

function App() {
    const [showShop, setShowShop] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showMission, setShowMission] = useState(false);
    const [showRanking, setShowRanking] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const toggleShop = () => {
        setShowShop(!showShop);
    };

    const toggleMessages = () => {
        setShowMessages(!showMessages);
    };

    const toggleMission = () => {
        setShowMission(!showMission);
    };

    const toggleRanking = () => {
        setShowRanking(!showRanking);
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    return (
        <div className="App">
            <Navbar />
            <Title />
            <Footer
                onOpenShop={toggleShop}
                onOpenMessages={toggleMessages}
                onOpenMission={toggleMission}
                onOpenRanking={toggleRanking}
                onOpenSettings={toggleSettings}
            />
            {showShop && <Shop onClose={toggleShop} />}
            {showMessages && <Messages onClose={toggleMessages} />}
            {showMission && <Mission onClose={toggleMission} />}
            {showRanking && <Ranking onClose={toggleRanking} />}
            {showSettings && <Settings onClose={toggleSettings} />}
        </div>
    );
}

export default App;
