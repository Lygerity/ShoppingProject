import { useDispatch } from "react-redux";
import {removeItemFromList} from '../../../../actions/items'
import "../cartItem.css";

export default function SubItem(props){

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(removeItemFromList(props.rank));
    }

    return(
        <div className="subItem">
            <div className="cartItemPicture" style={{backgroundImage: `url(${props.picture})`}}/>
                <div className="cartItemInfos">
                    <div className="cartItemName">{props.name}</div>
                    <div className="cartItemSize">{props.size[0]}</div>
                    <div className="Quantity">1</div>
                </div>
                <div className="itemGestion">
                    <button title="Remove item from cart" className="deleteButton" onClick={()=>handleClick()}></button>
                    <div className="cartItemPrice">{props.price} $</div>
                </div>
        </div>
    );
}