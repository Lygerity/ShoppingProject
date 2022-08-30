import { useState } from "react";
import { useDispatch } from "react-redux";
import { postItem } from "../../actions/items";


export default function AdminForm({admin, setAdmin}){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0.0);
    const [picture, setPicture] = useState("");
    const [size, setSize] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(postItem({url: picture, name: name, price: price, size: size}))
        setAdmin(!admin);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label for="itemName">Item Name</label>
            <input type={'text'} id="itemName" value={name} onChange={(e) => setName(e.target.value)}/>
            <label for="itemPrice">Item Price</label>
            <input type={'text'} id="itemPrice" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label for="itemUrl">Picture Url</label>
            <input type={'text'} id="itemUrl" value={picture} onChange={(e) => setPicture(e.target.value)}/>
            <label for="itemSize">Item Size</label>
            <input type={'text'} id="itemSize" value={size} onChange={(e) => setSize(e.target.value)}/>
            <input type={'submit'} value={"Submit"} ></input>
        </form>
    );
}