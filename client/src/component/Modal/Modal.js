import { useDispatch, useSelector } from "react-redux";
import { closeModal } from '../../actions/items';

import './Modal.css';


export default function(props){    
    const dispatch = useDispatch();


    const onClose = () => {
        console.log(props.children.name);
        dispatch(closeModal());
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