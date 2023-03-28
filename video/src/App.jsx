import InventoryContainer from './components/main';
import inventory from './data/inventory.json';
import './App.css';
export default function App() {

  
  console.log(inventory)
  return (
  <div class='main'>
    <h1 id='storename'>VIDEO STORE </h1>
    <InventoryContainer video={inventory}/>
    <footer>© 2023 Video Store</footer>
  </div>)

  
}


