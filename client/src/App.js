import './App.css';
import {React, useState, useEffect} from 'react';
import Items from './component/item/items/items'
import Sizes from './component/sizes/sizes'
import Cart from './component/cart/cart'
import axios from 'axios';

function App() {

  
    const[apiResponse, setResponse] = useState(null);
  
    function callAPI(){
      axios.get("http://localhost:9000")
          .then(res => setResponse(res))
          .catch(err => console.log(err));
  
      console.log(apiResponse);
    }

  useEffect(()=>{
    callAPI();
}, []);

useEffect(()=>{
  console.log("test 123")
}, [apiResponse])
 
  return (
    <main className="App">
      <div className='Sizes'>
        <h3>Sizes</h3>
        <Sizes/>
      </div>
      <main className='itemList'>
          <Items/>
      </main>
      <Cart/>
    </main>
  );
}

export default App;
