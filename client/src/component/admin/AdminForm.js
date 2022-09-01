import { useState } from "react";
import { useDispatch } from "react-redux";
import { postItem } from "../../actions/items";
import "./adminForm.css";

export default function AdminForm({ admin, setAdmin }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [picture, setPicture] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && picture !== "" && size !== "") {
      dispatch(
        postItem({ url: picture, name: name, price: price, size: size })
      );
    }
    setAdmin(!admin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="itemLabel">Item Name</label>
      <input
        type={"text"}
        id="itemName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="itemLabel">Item Price ($)</label>
      <input
        type={"text"}
        id="itemPrice"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label className="itemLabel">Picture Url</label>
      <input
        type={"text"}
        id="itemUrl"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <label className="itemLabel">Item Size</label>
      <input
        type={"text"}
        id="itemSize"
        value={size}
        onChange={(e) => setSize(e.target.value.toUpperCase())}
      />
      <input type={"submit"} value={"Add Item"} className="submitButton" />
    </form>
  );
}
