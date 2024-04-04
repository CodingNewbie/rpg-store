import "./Mission.css";

function Mission({ onClose }) {
    return (
        <div className="mission-backdrop">
            <div className="mission-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="mission-close"
                />
            </div>
        </div>
    );
}

export default Mission;
