import "./Item.css";
import constants from "../common/config";

function Item({ info, onPurchase }) {
    return (
        <div className="item">
            <img src={constants.IMAGE_PATH_ITEMS + info.image} alt="" />
            <h6>{info.title}</h6>
            <div className="gold-frame" onClick={() => onPurchase(info)}>
                <label className="price">{info.price}</label>
            </div>
        </div>
    );
}

export default Item;
