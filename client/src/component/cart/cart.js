import "./cart.css";

import {React, useState, useEffect} from 'react';
export default function Items(props){

    const[isOpen, setOpen] = useState(false)
  

    function handleClick(){
        setOpen(!isOpen);
    }
    
    
    
    if(!isOpen){
        
        return(
        <div className="Panier">
        <button className="Cart" onClick={handleClick}>
            <div className="Icone">
                <div className="Products">0</div>
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
                        <div className="Products2">0</div>
                    </div>
                    <span>Cart</span>
                </div>
                <div className="Content">
                    <label>No products in the cart</label>
                </div>
                <div className="Checkout">
                    <div className="CheckoutDisplay">
                        <div>
                            SUBTOTAL
                        </div>
                        <div className="Subtotal">
                            0.00 $
                        </div>
                    </div>
                    <button className="CheckoutButton">CHECKOUT</button>
                </div>
            </div>
        </div>
        );
    }

}