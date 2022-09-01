import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItemTemporarly } from "../../../actions/items";
import "./EditItem.css";

export default function EditItem(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItem(props.id));
  }, []);

  const { itemToEdit } = useSelector((state) => state.items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setPrice(itemToEdit.price);
      setSize(itemToEdit.size);
      setUrl(itemToEdit.url);
    }
  }, [itemToEdit]);

  useEffect(() => {
    if(name!=="" && price !=="" && size!=="" && url!==""){
      dispatch(updateItemTemporarly({_id: itemToEdit._id, name: name, price: price, size: size, url: url}));
    }
  },[name, price, size, url])

  return (
    <div className="itemToEdit">
      <form>
        <div className="editName">
          <input
            type={"text"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="editPrice">
          <input
            type={"text"}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div className="editSize">
          <input
            type={"text"}
            value={size}
            onChange={(event) => setSize(event.target.value.toUpperCase())}
          ></input>
        </div>
        <div className="editUrl">
          <input
            type={"text"}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          ></input>
        </div>
      </form>
        <div style={{backgroundImage: `url(${url})`}}/>
    </div>
  );
}
