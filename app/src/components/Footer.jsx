import "./Footer.css";
import React from "react";

function Footer({
    onOpenItems,
    onOpenShop,
    onOpenMessages,
    onOpenMission,
    onOpenRanking,
    onOpenSettings,
}) {
    return (
        <div className="footer">
            <img src="/images/friend.png" alt="" className="round-icon" />
            <nav className="footer-links">
                <img
                    src="/images/items.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenItems}
                />
                <img
                    src="/images/shop.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenShop}
                />
                <img
                    src="/images/messages.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenMessages}
                />
                <img
                    src="/images/mission.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenMission}
                />
                <img
                    src="/images/ranking.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenRanking}
                />
                <img
                    src="/images/settings.png"
                    alt=""
                    className="nav-icon"
                    onClick={onOpenSettings}
                />
            </nav>
            <img src="/images/facebook.png" alt="" className="round-icon" />
        </div>
    );
}

export default Footer;
