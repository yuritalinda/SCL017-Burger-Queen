import './index.css'
import OrderList from './Components/Aside/OrderList';
import Header from './Components/Main/Header';
import Menu from './Components/Main/Menu';
import Navbar from './Components/Main/Navbar';

function App() {
  return (
   
    <div className="app-container">


    <Header /> 
    <Navbar />
    <Menu /> 
    <OrderList />
    
    </div>


  );
}

export default App;
