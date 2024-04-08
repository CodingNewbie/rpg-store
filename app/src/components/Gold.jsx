import "./Gold.css";

function Gold({ gold }) {
    return (
        <div className="gold-container">
            <img className="resource" src="/images/gold.png" alt="" />
            <h2>{gold.toLocaleString()}</h2>
        </div>
    );
}

export default Gold;
