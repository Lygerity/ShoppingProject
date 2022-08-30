import "./cart.css";

import {React, useState} from 'react';
import CartItem from "./cartItems/cartItem";
import { useSelector } from "react-redux";
export default function Items(props){

    const[isOpen, setOpen] = useState(false)
    const cartItems = useSelector((state) => state.items.cartItems)
  

    function handleClick(){
        setOpen(!isOpen);
    }
    
    
    if(!isOpen){
        
        return(
        <div className="Panier">
        <button className="Cart" onClick={handleClick}>
            <div className="Icone">
                <div className="Products">{cartItems.length || 0}</div>
            </div>
        </button>
    </div>
    );
    }else{
        return(
            <div className="PanierOpen">
            <button className="Quit" onClick={handleClick}>
                <span>X</span>
            </button>
            <div className="contenuPanier">
                <div className="Head">
                    <div className="Icone2">
                        <div className="Products2">{cartItems.length || 0}</div>
                    </div>
                    <span>Cart</span>
                </div>
                <div className="Content">
                    <CartItem/>
                </div>
                <div className="Checkout">
                    <div className="CheckoutDisplay">
                        <div>
                            SUBTOTAL
                        </div>
                        <div className="Subtotal">
                            {cartItems.map(item => item.price).reduce( (a, b)=> a + b, 0).toFixed(2)} $
                        </div>
                    </div>
                    <button className="CheckoutButton">CHECKOUT</button>
                </div>
            </div>
        </div>
        );
    }

}