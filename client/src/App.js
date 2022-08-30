import './App.css';
import {React, useState} from 'react';
import Items from './component/item/items/items';
import Sizes from './component/sizes/sizes';
import Cart from './component/cart/cart';
import AdminForm from './component/admin/AdminForm';

function App() {
  const [admin, setAdmin] = useState(false);

  const handleClick = () =>{
    setAdmin(!admin);
  }

  return (
    
    <main>
      <button onClick={()=>handleClick()}>ADMIN</button>
      <div>
        {admin && <AdminForm admin={admin} setAdmin={setAdmin}/>}
      </div>
      <div className='App'>
        <div className='Sizes'>
          <h3>Sizes</h3>
          <Sizes/>
        </div>
        <main className='itemList'>
            <Items admin={admin} setAdmin={setAdmin}/>
        </main>
        <Cart/>
      </div>
    </main>
  );
}

export default App;
