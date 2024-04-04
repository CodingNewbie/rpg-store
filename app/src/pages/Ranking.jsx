import "./Ranking.css";

function Ranking({ onClose }) {
    return (
        <div className="ranking-backdrop">
            <div className="ranking-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="ranking-close"
                />
            </div>
        </div>
    );
}

export default Ranking;
