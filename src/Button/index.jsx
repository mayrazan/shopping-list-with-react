import "./style.css";

export function AddItems(props){
    const {value, onClick} = props;
    return <button className="btn" type="submit" onClick={onClick}>Add Item</button>
}

export function RemoveItems(props){
    const {value, onClick} = props;
    return <button className="btn" type="submit" onClick={onClick}>Remove Item</button>
}