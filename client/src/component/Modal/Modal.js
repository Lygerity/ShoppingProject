import { useDispatch, useSelector } from "react-redux";
import { closeModal, updateItem } from '../../actions/items';

import './Modal.css';


export default function Modal(props){    
    const dispatch = useDispatch();

    const itemToEdit = useSelector((state) => state.items.itemToEdit);

    const onClose = () => {
        dispatch(updateItem(itemToEdit));
        dispatch(closeModal());
        props.setAdmin(false);
    }


        return (
            <div className="Modal">
                <h2>Modify an Item</h2>
                <div>
                    {props.children}
                </div>
                <button className="saveModifications" onClick={() => onClose()}>Save Modifications</button>
                <div>
                </div>
            </div>
        );
    
}