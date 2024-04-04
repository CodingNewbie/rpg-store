import React from "react";
import "./Shop.css";
import Item from "../components/Item";

function Shop({ onClose }) {
    const items = [
        {
            title: "Potion",
            price: 800,
            category: "Consumable",
            image: "red-potion.png",
            _id: "0001",
        },
        {
            title: "Shield",
            price: 900,
            category: "Armor",
            image: "shield.png",
            _id: "0002",
        },
        {
            title: "Bow",
            price: 600,
            category: "Weapon",
            image: "bow.png",
            _id: "0003",
        },
        {
            title: "Bomb",
            price: 300,
            category: "Weapon",
            image: "bomb.png",
            _id: "0004",
        },
        {
            title: "Plus Time",
            price: 500,
            category: "Consumable",
            image: "plus-time.png",
            _id: "0005",
        },
        {
            title: "Lucky Chance",
            price: 600,
            category: "Consumable",
            image: "lucky-chance.png",
            _id: "0006",
        },
        {
            title: "Crown",
            price: 900,
            category: "Armor",
            image: "crown.png",
            _id: "0007",
        },
        {
            title: "Key",
            price: 750,
            category: "Consumable",
            image: "key.png",
            _id: "0008",
        },
    ];
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
                    <Item key={item._id} info={item} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
