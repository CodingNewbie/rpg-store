import "./Item.css";
import constants from "../common/config";

function Item(props) {
    return (
        <div className="item">
            <img src={constants.IMAGE_PATH_ITEMS + props.info.image} alt="" />
            <h6>{props.info.title}</h6>
            <div className="gold-frame">
                <label className="price">
                    {props.info.price}
                </label>
            </div>
        </div>
    );
}

export default Item;
