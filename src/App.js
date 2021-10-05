import './index.css';
import Aside from './Components/Aside/Aside';
import Header from './Components/Main/Header';
import Menu from './Components/Main/Menu';
import Navbar from './Components/Main/Navbar';

function App() {
  return (
   
    <div className="app-container">

    <main className="app-main" >
    <Header /> 
    <Navbar />
    <Menu />
    </main>

    <aside className="app-aside" >
    <Aside />
    </aside>
    
    
    </div>


  );
}

export default App;
