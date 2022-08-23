import './App.css';
import Items from './component/item/items/items'
import Sizes from './component/sizes/sizes'
import Cart from './component/cart/cart'

function App() {
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
