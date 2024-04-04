import "./Messages.css";

function Messages({ onClose }) {
    return (
        <div className="messages-backdrop">
            <div className="messages-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="messages-close"
                />
            </div>
        </div>
    );
}

export default Messages;
