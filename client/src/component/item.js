import {React} from 'react';
import './item.css';


export default function item(props){
    /* const[name, setName] = useState('White Tee-Shirt');
    const[price, setPrice] = useState('10.00');
    const[picture, setPicture] = usePicture('shorturl.at/gioQ1'); */


    return (
        <div className='item'>
            <img src={props.picture} className='itemPicture' alt='vêtement'/>
            <div>{props.name}</div>
            <div>{props.price} $</div>
            <button>Add to cart</button>
        </div>
    );
}
