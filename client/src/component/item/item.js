import {React} from 'react';
import './item.css';


export default function item(props){
    
    return (
        <div className='item'>
            
            <div className='itemPicture' style={{backgroundImage: `url(${props.picture})`}}></div>
            <div className='itemName'>{props.name}</div>
            <div className='itemPrice'>{props.price} $</div>
            <button className='addButton'>Add to cart</button>
        </div>
    );
}
