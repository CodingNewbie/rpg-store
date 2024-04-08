import "./Items.css";
import constants from "../common/config";

function Items({ onClose, gold, inventory }) {
    const totalSlots = 24;
    let filledInventory = [];
    let slotCounts = {};

    inventory.forEach((item) => {
        if (item) {
            if (item.stackable) {
                if (!slotCounts[item._id]) {
                    // Add the item with count for the first time
                    filledInventory.push({ ...item, count: 1 });
                    slotCounts[item._id] = 1;
                } else {
                    // Increase the count for subsequent additions
                    slotCounts[item._id] += 1;
                    // Update the count in the filledInventory
                    const existingItemIndex = filledInventory.findIndex(
                        (i) => i._id === item._id
                    );
                    if (existingItemIndex !== -1) {
                        filledInventory[existingItemIndex].count =
                            slotCounts[item._id];
                    }
                }
            } else {
                // Non-stackable items are added directly
                filledInventory.push(item);
            }
        }
    });

    // Fill the rest of the inventory slots with null if necessary
    filledInventory = filledInventory.concat(
        new Array(totalSlots - filledInventory.length).fill(null)
    );

    const slotsUsed = filledInventory.filter((item) => item !== null).length;

    return (
        <div className="items-backdrop">
            <div className="items-container">
                <h2 className="gold-count">{gold.toLocaleString()}</h2>
                <h2 className="item-count">{slotsUsed}</h2>
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
                    {filledInventory.map((item, index) => (
                        <div className="inventory-slot" key={index}>
                            {item ? (
                                <>
                                    <img
                                        src={
                                            constants.IMAGE_PATH_ITEMS +
                                            item.image
                                        }
                                        alt={item.title}
                                    />
                                    {item.stackable && item.count > 1 && (
                                        <div className="stack-count">
                                            {item.count}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="empty-slot"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Items;
