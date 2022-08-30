import './items.css';
import Item from "../item";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getItemsList } from '../../../actions/items';

export default function Items({props, admin, setAdmin}){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getItemsList())
    }, [])

    const {items, isLoading} = useSelector((state) => state.items);

    if(!items.length && !isLoading) return 'No Items';

    return(
        items.map((item, key) =>
            
            <div className='items' key={key}>
                <Item id={item._id} name={item.name} price={item.price} picture={item.url} size={item.size} admin={admin} setAdmin={setAdmin}></Item>
            </div>
        )
    );
}