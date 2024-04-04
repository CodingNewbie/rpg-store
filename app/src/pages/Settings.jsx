import "./Settings.css";

function Settings({ onClose }) {
    return (
        <div className="settings-backdrop">
            <div className="settings-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="settings-close"
                />
            </div>
        </div>
    );
}

export default Settings;
