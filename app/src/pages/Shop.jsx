import React, { useState } from "react";
import "./Shop.css";
import Item from "../components/Item";
import PurchaseConfirmation from "../components/PurchaseConfirmation";

function Shop({ onClose, addToInventory }) {
    const items = [
        {
            title: "Potion",
            price: 800,
            category: "Consumable",
            image: "red-potion.png",
            stackable: true,
            _id: "0001",
        },
        {
            title: "Shield",
            price: 900,
            category: "Armor",
            image: "shield.png",
            stackable: false,
            _id: "0002",
        },
        {
            title: "Bow",
            price: 600,
            category: "Weapon",
            image: "bow.png",
            stackable: false,
            _id: "0003",
        },
        {
            title: "Bomb",
            price: 300,
            category: "Weapon",
            image: "bomb.png",
            stackable: true,
            _id: "0004",
        },
        {
            title: "Plus Time",
            price: 500,
            category: "Consumable",
            image: "plus-time.png",
            stackable: true,
            _id: "0005",
        },
        {
            title: "Lucky Chance",
            price: 600,
            category: "Consumable",
            image: "lucky-chance.png",
            stackable: true,
            _id: "0006",
        },
        {
            title: "Crown",
            price: 900,
            category: "Armor",
            image: "crown.png",
            stackable: false,
            _id: "0007",
        },
        {
            title: "Key",
            price: 750,
            category: "Consumable",
            image: "key.png",
            stackable: true,
            _id: "0008",
        },
    ];
    const [showPurchaseConfirmation, setShowPurchaseConfirmation] =
        useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const onPurchase = (item) => {
        setSelectedItem(item);
        setShowPurchaseConfirmation(!showPurchaseConfirmation);
    };

    return (
        <div className="shop-backdrop">
            <div className="shop-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="shop-close"
                />
                {items.map((item) => (
                    <Item
                        key={item._id}
                        info={item}
                        onPurchase={() => onPurchase(item)}
                    />
                ))}

                {showPurchaseConfirmation && selectedItem && (
                    <PurchaseConfirmation
                        item={selectedItem}
                        onConfirm={() => {
                            console.log("Item purchased: ", selectedItem.title);
                            addToInventory(selectedItem);
                            setShowPurchaseConfirmation(false);
                        }}
                        onCancel={() => {
                            console.log(
                                "Purchase canceled for: ",
                                selectedItem.title
                            );
                            setShowPurchaseConfirmation(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Shop;
