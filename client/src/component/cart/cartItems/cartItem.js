import "./cartItem.css";
import {useSelector } from 'react-redux';
import {React} from 'react';
import SubItem from "./subItems/subItems";

export default function CartItem(props){
    const {cartItems, isLoading} = useSelector((state) => state.items);

    if(!cartItems.length && !isLoading){
        return(
            <div>No products in the cart</div>
        );
    }else{
        return(
            cartItems.map((item, key) =>
            <div className="cartItem">
                <SubItem id={item._id} name={item.name} picture={item.picture} size={item.size} price={item.price}/>
            </div>
            )
        );
    }

}