
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">      
        <Navbar/>
        <ItemListContainer greeting='Los mejores muebles'/>

    </div>
   
  );
}

export default App;
