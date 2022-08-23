import {React} from 'react';
import './item.css';


export default function item(props){
    //const style=`background-image: url(${props.picture})`;
    //console.log({style});
    
    return (
        <div className='item'>
            
            <div className='itemPicture' style={{backgroundImage: `url(${props.picture})`}}></div>
            <div className='itemName'>{props.name}</div>
            <div className='itemPrice'>{props.price} $</div>
            <button className='addButton'>Add to cart</button>
        </div>
    );
}

//<img src={props.picture} className='itemPicture' alt='vêtement'/>
