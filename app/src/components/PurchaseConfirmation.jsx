import "./PurchaseConfirmation.css";

function PurchaseConfirmation({ item, onConfirm, onCancel }) {
    return (
        <div className="purchase-confirmation-backdrop">
            <div className="purchase-confirmation">
                <div onClick={() => onConfirm(item)} className="confirm-button"></div>
                <div onClick={onCancel} className="cancel-button"></div>
            </div>
        </div>
    );
}

export default PurchaseConfirmation;
