import './App.css';
import {React, useState} from 'react';
import Items from './component/item/items/items';
import Sizes from './component/sizes/sizes';
import Cart from './component/cart/cart';
import AdminForm from './component/admin/AdminForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './actions/items';

function App() {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const[isOpen, setOpen] = useState(false);
  const[isFilter, setFilter] = useState(false);
  const{ editableId } = useSelector((state) =>state.items);

  const handleClick = () =>{
    setAdmin(!admin);
    if(editableId){
      dispatch(closeModal());
    }
  }

  return (
    
    <main>
      <button className='adminButton' onClick={()=>handleClick()}>ADMIN</button>
      <div>
        {admin && <AdminForm admin={admin} setAdmin={setAdmin}/>}
      </div>
      <div className='App'>
        <div className='Sizes'>
          <h3>Sizes</h3>
          <Sizes isFilter={isFilter} setFilter={setFilter}/>
        </div>
        <main className='itemList'>
            <Items admin={admin} setAdmin={setAdmin} setOpen={setOpen} isFilter={isFilter}/>
        </main>
        <Cart isOpen={isOpen} setOpen={setOpen}/>
      </div>
    </main>
  );
}

export default App;
