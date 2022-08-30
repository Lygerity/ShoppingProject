import {React} from 'react';
import { useDispatch} from 'react-redux';
import { addItemToList} from '../../actions/items';
import './item.css';



export default function Item(props){
    const dispatch = useDispatch();
    const handleClick = () =>{ 
        
        dispatch(addItemToList({_id: props.id, picture: props.picture, name: props.name, price: props.price, size: props.size}));
    }

    
    return (
        <div className='item'>
            <div className='itemPicture' style={{backgroundImage: `url(${props.picture})`}}></div>
            <div className='itemName'>{props.name}</div>
            <div className='itemPrice'>{props.price} $</div>
            <button className='addButton' onClick={()=>handleClick()}>Add to cart</button>
        </div>
    );
}
