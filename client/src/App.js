import logo from './logo.svg';
import './App.css';
import Item from './component/item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item name='Tee-Shirt blanc' price='9.99' picture='https://www.tee-shirts-express.com/images/produits/1920/gi-2000/gi-2000-white-1.jpg'/>
      </header>
    </div>
  );
}

export default App;
