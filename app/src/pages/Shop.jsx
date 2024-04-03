import React from "react";
import "./Shop.css";
import Item from "../components/Item";

function Shop({ onClose }) {
    const items = [
        {
            title: "Potion",
            price: 700,
            category: "Consumable",
            image: "red-potion.png",
        },
        {
            title: "Shield",
            price: 900,
            category: "Armor",
            image: "shield.png",
        },
        {
            title: "Bow",
            price: 600,
            category: "Weapon",
            image: "bow.png",
        },
        {
            title: "Bomb",
            price: 300,
            category: "Weapon",
            image: "bomb.png",
        },
        {
            title: "Plus Time",
            price: 500,
            category: "Consumable",
            image: "plus-time.png",
        },
        {
            title: "Lucky Chance",
            price: 600,
            category: "Consumable",
            image: "lucky-chance.png",
        },
        {
            title: "Crown",
            price: 900,
            category: "Armor",
            image: "crown.png",
        },
        {
            title: "Key",
            price: 750,
            category: "Consumable",
            image: "key.png",
        },
    ];
    return (
        // The backdrop div will cover the entire viewport and dim the background
        <div className="shop-backdrop">
            <div className="shop-container">
                <img
                    src="/images/shop/button-close.png"
                    alt=""
                    onClick={onClose}
                    className="button-close"
                />
                {items.map((item) => (
                    <Item key={item._id} info={item} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
