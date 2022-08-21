import {React} from 'react';
import './item.css';


export default function item(props){
    return (
        <section className='item'>
            <img src={props.picture} className='itemPicture' alt='vêtement'/>
            <div>{props.name}</div>
            <div>{props.price} $</div>
            <button>Add to cart</button>
        </section>
    );
}
