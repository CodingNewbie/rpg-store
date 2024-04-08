import "./Items.css";
import constants from "../common/config";

function Items({ onClose, gold, inventory }) {
    const displaySlots = inventory || new Array(24).fill(null);

    return (
        <div className="items-backdrop">
            <div className="items-container">
                <h2>{gold.toLocaleString()}</h2>
                <img
                    src="/images/shop/button-close.png"
                    alt="Close"
                    onClick={onClose}
                    className="items-close"
                />
                <div className="inventory">
                    <img
                        src="/images/inventory-title.png"
                        alt=""
                        className="inventory-title"
                    />
                    {displaySlots.map((item, index) => (
                        <img
                            key={index}
                            src={
                                item
                                    ? constants.IMAGE_PATH_ITEMS + item.image
                                    : "/images/item-slot.png"
                            }
                            alt={item ? item.name : "Empty Slot"}
                            className="inventory-slot"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Items;
