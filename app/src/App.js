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
import Items from "./pages/Items";

function App() {
    const players = [
        {
            name: "Adam Schmidt",
            gold: 20000,
        },
    ];

    const player = players[0];
    const [gold, setGold] = useState(player.gold);
    const [inventory, setInventory] = useState(Array(24).fill(null));
    const [showItems, setShowItems] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showMission, setShowMission] = useState(false);
    const [showRanking, setShowRanking] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const toggleItems = () => {
        setShowItems(!showItems);
    };

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

    const addToInventory = (item) => {
        const emptyIndex = inventory.findIndex((slot) => slot === null);
        if (emptyIndex !== -1) {
            const newInventory = [...inventory];
            newInventory[emptyIndex] = item;
            setInventory(newInventory);

            setGold((currentGold) => currentGold - item.price);
        }
    };

    return (
        <div className="App">
            <Navbar gold={gold} />
            <Title />
            <Footer
                onOpenItems={toggleItems}
                onOpenShop={toggleShop}
                onOpenMessages={toggleMessages}
                onOpenMission={toggleMission}
                onOpenRanking={toggleRanking}
                onOpenSettings={toggleSettings}
            />
            {showItems && (
                <Items
                    onClose={toggleItems}
                    gold={gold}
                    inventory={inventory}
                />
            )}
            {showShop && (
                <Shop onClose={toggleShop} addToInventory={addToInventory} />
            )}
            {showMessages && <Messages onClose={toggleMessages} />}
            {showMission && <Mission onClose={toggleMission} />}
            {showRanking && <Ranking onClose={toggleRanking} />}
            {showSettings && <Settings onClose={toggleSettings} />}
        </div>
    );
}

export default App;
