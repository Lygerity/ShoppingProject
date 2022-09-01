import {React} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addItemToList, deleteItem, idItemToEdit} from '../../actions/items';
import EditItem from './editItem/EditItem';
import './item.css';



export default function Item(props){
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.items);
    const handleClick = () =>{ 
        dispatch(addItemToList({_id: props.id, picture: props.picture, name: props.name, price: props.price, size: props.size, rank: cartItems.length}));
        props.setOpen(true);
    }

    const handleDelete = () =>{
        dispatch(deleteItem(props.id))
        props.setAdmin(!props.admin);
    }

    const handleEdit = () => {
        dispatch(idItemToEdit(props.id));
        // return(
        //     <EditItem id={props.id} url={props.picture} name={props.name} price={props.price} size={props.size}/>
        // );
    }

    
    return (
        <div className='item'>
            {props.admin === true && <button className='editItemButton' onClick={() => handleEdit()}/>}
            {props.admin === true && <button className='deleteItemButton' onClick={() => handleDelete()}/>}
            <div className='itemPicture' style={{backgroundImage: `url(${props.picture})`}}></div>
            <div className='itemName'>{props.name}</div>
            <div className='itemPrice'>{props.price} $</div>
            <button className='addButton' onClick={()=>handleClick()}>Add to cart</button>
        </div>
    );
}
